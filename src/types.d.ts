export interface ITodo {
  id: string
  title: string
  completed: boolean
  status: TaskStatus
}

export type TodoId = Pick<ITodo, 'id'>
export type TodoTitle = Pick<ITodo, 'title'>

export type ListOfTodos = ITodo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export type TaskStatus = typeof TASKT_STATUS[keyof typeof TASKT_STATUS]

export interface ITime {
  hours: string
  minutes: string
  seconds: string
}
export interface IStopwatch {
  currentTime: ITime
  isActive: boolean
  start: () => void
  pause: () => void
  reset: () => void
}
