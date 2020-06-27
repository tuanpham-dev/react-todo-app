import { TodoState, TodoAction } from './todo/types'

export interface AppState {
  todo: TodoState
}

export type AppAction = TodoAction

type ActionByType<T extends AppAction['type'], U = AppAction> = U extends { type: T } ? U : never

export type ActionHandler<S, T extends AppAction['type']> = (state: S, action: ActionByType<T>) => S
export type ActionHandlerMap<S> = {
  [T in AppAction['type']]?: ActionHandler<S, T>
}
