import { ActionHandler, ActionHandlerMap } from '../types'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoState = Todo[]

export enum TodoActionType {
  ADD = 'TODO/ADD',
  REMOVE = 'TODO/REMOVE',
  TOGGLE = 'TODO/TOGGLE',
  CHANGE_TITLE = 'TODO/CHANGE_TITLE',
  CLEAR_COMPLETED = 'TODO/CLEAR_COMPLETED'
}

interface AddTodo {
  type: typeof TodoActionType.ADD
  payload: string
}

interface RemoveTodo {
  type: typeof TodoActionType.REMOVE
  payload: Todo
}

interface ToggleTodo {
  type: typeof TodoActionType.TOGGLE
  payload: Todo
}

interface ChangeTodoTitle {
  type: typeof TodoActionType.CHANGE_TITLE
  payload: {
    todo: Todo
    newTitle: string
  }
}

interface ClearCompletedTodo {
  type: typeof TodoActionType.CLEAR_COMPLETED
}

export type TodoAction = AddTodo | RemoveTodo | ToggleTodo | ChangeTodoTitle | ClearCompletedTodo

export type TodoActionHandler<T extends TodoAction['type']> = ActionHandler<TodoState, T>
export type TodoActionHandlerMap = ActionHandlerMap<TodoState>
