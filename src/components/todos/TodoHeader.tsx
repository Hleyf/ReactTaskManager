import { CreateTodo } from './CreateTodo'

export const TodoHeader: React.FC = () => {
  return (
        <header className="flex flex-col ">
        <h1 className='text-4xl font-extrabold text-center font-lobster'>
          Tasks
        </h1>
        <CreateTodo/>
        </header>
  )
}
