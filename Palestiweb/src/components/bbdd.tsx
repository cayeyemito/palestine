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
          <li key={user.id}>
            {user.name || user.username || user.email || JSON.stringify(user)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page
