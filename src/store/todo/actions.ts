import { ActionCreator } from 'redux'
import { TodoAction, TodoActionType, Todo } from './types'

export const addTodo: ActionCreator<TodoAction> = (title: string) => ({
  type: TodoActionType.ADD,
  payload: title,
})

export const removeTodo: ActionCreator<TodoAction> = (todo: Todo) => ({
  type: TodoActionType.REMOVE,
  payload: todo,
})

export const toggleTodo: ActionCreator<TodoAction> = (todo: Todo) => ({
  type: TodoActionType.TOGGLE,
  payload: todo,
})

export const changeTodoTitle: ActionCreator<TodoAction> = (todo: Todo, newTitle: string) => ({
  type: TodoActionType.CHANGE_TITLE,
  payload: {
    todo,
    newTitle,
  },
})

export const clearCompletedTodo: ActionCreator<TodoAction> = () => ({
  type: TodoActionType.CLEAR_COMPLETED,
})
