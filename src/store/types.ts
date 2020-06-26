import { TodoState, TodoAction } from './todo/types'

export interface AppState {
  todo: TodoState
}

export type AppAction = TodoAction
