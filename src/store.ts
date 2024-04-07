import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './slices/todo'

export const store = configureStore({
  reducer: {
    tasks: todosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
