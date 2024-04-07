import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../slices/todo'

export const CreateTodo: React.FC = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('' as string)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (title.trim() !== '') {
      const id: string = crypto.randomUUID().toString()
      dispatch(addTodo({ id, title, completed: false }))
      setTitle('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
            className="task-input"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
            autoFocus
        />
    </form>
  )
}
