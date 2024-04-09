import { useSelector } from 'react-redux'
import { TodoFooter } from './components/todos/TodoFooter'
import { TodoHeader } from './components/todos/TodoHeader'
import { addTodo, selectTodos } from './slices/todo'
import { type ITodo } from './types'
import { Todos } from './components/todos/Todos'
import { store } from './store'
import { Stopwatch } from './components/stopWatch/StopWatch'
import './App.css'
import { TASK_STATUS } from './common/consts'

const mockTodos: ITodo[] = [
  { id: '1', title: 'Task 1', completed: false, status: TASK_STATUS.OPEN},
  { id: '2', title: 'Task 2', completed: true, status: TASK_STATUS.COMPLETED},
  { id: '3', title: 'Task 3', completed: false, status: TASK_STATUS.OPEN}
]

if (store.getState().tasks.todos.length === 0) {
  mockTodos.forEach((todo: ITodo) => {
    store.dispatch(addTodo(
      { id: todo.id, title: todo.title, completed: todo.completed, status: todo.status}
    ))
  })
}

const App = (): JSX.Element => {
  // it could be placed in TodoFooter.tsx, but I wanted to pass the props to TodoFooter
  const todos = useSelector(selectTodos)
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className='main-container' >
    <section className='app-section flex-w-3/5'>
      <div className='main-col'>
        <TodoHeader />
      </div>
      <div className='main-col'>
        <Todos />
      </div>
      <div className='main-col'>
        <TodoFooter
          activeCount={activeCount}
          completedCount={completedCount}
        />
      </div>
    </section>
    <section className='app-section'>
      <Stopwatch />
    </section>
    </div>
  )
}

export default App
