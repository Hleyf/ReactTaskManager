export interface ITodo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<ITodo, 'id'>
export type TodoTitle = Pick<ITodo, 'title'>

export type ListOfTodos = ITodo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export interface ITime {
  hours: string
  minutes: string
  seconds: string
}
export interface IStopwatch {
  currentTime: ITime
  start: () => void
  pause: () => void
  reset: () => void
}
