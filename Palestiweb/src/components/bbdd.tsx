import { supabase } from '../../utils/supabase'

interface RegisterData {
  email: string
  password: string
  nombre: string
  apellidos: string
  nacimiento: string  // formato 'YYYY-MM-DD'
}

export async function registerUser({ email, password, nombre, apellidos, nacimiento }: RegisterData) {
  try {
    console.log("📤 Enviando a Supabase Auth:", { email, password })

    const { data, error } = await supabase.auth.signUp({ email: email.trim().toLowerCase(), password })

    if (error) {
      console.log("❌ Error de Auth:", error)
      return { success: false, error: error.message }
    }

    console.log("✅ Auth creado:", data.user)

    // Guardar datos extra en la tabla User
    if (data.user) {
      const { error: tableError } = await supabase.from('User').insert({
        email: data.user.email,
        nombre,
        apellidos,
        nacimiento
      })
      if (tableError) {
        console.log("❌ Error insertando en tabla User:", tableError)
        return { success: false, error: tableError.message }
      }
    }

    return { success: true, user: data.user }
  } catch (err) {
    console.log("💥 Error inesperado:", err)
    return { success: false, error: "Error inesperado" }
  }
}


export async function loginUser(email: string, password: string) {
  const cleanedEmail = email.trim().toLowerCase();

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: cleanedEmail,
      password,
    });

    if (error) {
      // Devolvemos mensaje amigable, que luego se muestra en el toast
      return { success: false, error: "Correo o contraseña incorrectos" };
    }

    if (!data.user) {
      return { success: false, error: "No se pudo iniciar sesión con esas credenciales" };
    }

    return { success: true, session: data.session, user: data.user };
  } catch {
    return { success: false, error: "Error inesperado al iniciar sesión" };
  }
}
