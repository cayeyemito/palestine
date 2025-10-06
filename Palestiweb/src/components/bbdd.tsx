import { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabase'

function Page() {
  const [todos, setTodos] = useState<any[]>([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos, error } = await supabase.from('todos').select()
      if (error) {
        console.error(error)
        return
      }

      if (todos && todos.length > 0) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <div>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.task || JSON.stringify(todo)}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page
