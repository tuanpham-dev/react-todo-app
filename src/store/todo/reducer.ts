import { v4 as uuidv4 } from 'uuid'
import { TodoState, TodoAction, TodoActionType, Todo } from './types'

const initialState: TodoState = []

export const todoReducer = (state: TodoState = initialState, action: TodoAction) => {
  let newTodos: TodoState

  switch (action.type) {
    case TodoActionType.ADD:
      const newTodo: Todo = {
        id: uuidv4(),
        title: action.payload,
        completed: false,
      }

      return [...state, newTodo]
    case TodoActionType.REMOVE:
      newTodos = state.filter((todo) => todo.id !== action.payload.id)

      return newTodos
    case TodoActionType.TOGGLE:
      newTodos = state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      )

      return newTodos
    case TodoActionType.CHANGE_TITLE:
      newTodos = state.map((todo) =>
        todo.id === action.payload.todo.id ? { ...todo, title: action.payload.newTitle } : todo
      )

      return newTodos
  }

  return state
}
