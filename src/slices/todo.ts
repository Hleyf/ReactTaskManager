import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type TodoId, type FilterValue, type ITodo } from '../types'
import { type RootState } from '../store'
import { TODO_FILTERS } from '../common/consts'

interface TodosState {
  todos: ITodo[]
  filter: FilterValue
}

type CompleteTodoPayload = Pick<ITodo, 'id' | 'completed'>

const initialState: TodosState = {
  todos: [],
  filter: TODO_FILTERS.ALL
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      console.info('adding Todo', action.payload)
      state.todos.push(action.payload)
    },
    getTodos: (state, action: PayloadAction<ITodo[]>) => {
      console.info('getting Todos', action.payload)
      state.todos = action.payload
    },
    deleteTodo: (state, action: PayloadAction<TodoId>) => {
      console.info('deleting Todo', action.payload)
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    completeTodo: (state, action: PayloadAction<CompleteTodoPayload>) => {
      console.info('completing Todo', action.payload)
      const { id, completed } = action.payload
      const todo = state.todos.find(todo => todo.id === id)
      if (todo !== undefined) {
        todo.completed = completed
      }
    },
    setTodoFilter: (state, action: PayloadAction<FilterValue>) => {
      state.filter = action.payload
    },
    clearCompleted: state => {
      state.todos = state.todos.filter(todo => !todo.completed)
    }

  }
})

export const { addTodo } = todosSlice.actions
export const { getTodos } = todosSlice.actions
export const { deleteTodo } = todosSlice.actions
export const { completeTodo } = todosSlice.actions
export const { setTodoFilter } = todosSlice.actions
export const { clearCompleted } = todosSlice.actions

export const selectCurrentFilter = (state: RootState): FilterValue => state.tasks.filter
export const selectTodos = (state: RootState): ITodo[] => {
  if (state.tasks.filter === TODO_FILTERS.COMPLETED) {
    return state.tasks.todos.filter(todo => todo.completed)
  }
  if (state.tasks.filter === TODO_FILTERS.ACTIVE) {
    return state.tasks.todos.filter(todo => !todo.completed)
  }
  return state.tasks.todos
}

export default todosSlice.reducer
