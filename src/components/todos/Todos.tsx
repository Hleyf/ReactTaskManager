import { useSelector } from 'react-redux'
import { Todo } from './Todo'
import { selectTodos } from '../../slices/todo'
import './Todos.css'

export const Todos: React.FC = () => {
  const todos = useSelector(selectTodos)

  return (
        <ul className='m-0 p-0 list-none'>
            {todos.map(todo => (
                <li key={todo.id} className={` task-list ${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        status={todo.status}
                        createdAt={todo.createdAt}
                        updatedAt={todo.updatedAt}
                        time={todo.time}
                        />
                </li>
            ))}
        </ul>
  )
}
