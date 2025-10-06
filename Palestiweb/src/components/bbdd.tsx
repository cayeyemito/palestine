import { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabase'

function Page() {
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    async function getUsers() {
        const { data, error } = await supabase.from('User').select('*')

        if (error) {
        console.error('Error al obtener usuarios:', error)
        return
        }

        console.log("📦 Datos obtenidos desde Supabase:", data)

        if (data && data.length > 0) {
        setUsers(data)
        }
    }

    getUsers()
    }, [])

  return (
    <div>
        <ul>
            {users.map((user: any) => (
                <li key={user.email}>
                    {user.nombre} {user.apellidos} ({user.email})
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Page
