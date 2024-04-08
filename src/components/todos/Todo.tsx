import { useDispatch } from 'react-redux'
import { type TodoId, type ITodo as TodoType } from '../../types'
import { completeTodo, deleteTodo } from '../../slices/todo'
import { InLineStopwatch } from '../stopWatch/InLineStopWatch'

export const Todo: React.FC<TodoType> = ({ id, title, completed }) => {
  const dispatch = useDispatch()
  const handleCompletedCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onCompleted({ id, completed: event.target.checked })
  }
  const onRemove = ({ id }: TodoId): void => {
    dispatch(deleteTodo({ id }))
  }

  const onCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    dispatch(completeTodo({ id, completed }))
  }
  return (
         <div className='group w-full flex flex-grow box-content task-item items-center'>
          <div>
            <input
                className="form-checkbox checked:focus:bg-purple-700 checked:hover:bg-purple-500
                  absolute top-0 bottom-0 left-4 m-auto border-none appearance-none rounded-full
                  w-5 h-5 focus:outline-none focus:ring-0 checked:bg-purple-700"
                type="checkbox"
                checked={completed}
                onChange={handleCompletedCheckbox}
            />
            <label>{title}</label>
          </div>
            <div className=" absolute right-16">
              <InLineStopwatch />
            </div>
            <div>
            <button className="absolute top-0 right-2.5 bottom-0 w-10 h-10 m-auto text-3xl text-gray-400
              transition-colors duration-200 ease-out hover:text-red-500 focus:text-red-300 opacity-0 group-hover:opacity-100"
              onClick={() => {
                onRemove({ id })
              }}>×</button>
            </div>
         </div>
  )
}
