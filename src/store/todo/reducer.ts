import { v4 as uuidv4 } from 'uuid'
import {
  TodoState,
  TodoAction,
  TodoActionType,
  Todo,
  TodoActionHandler,
  TodoActionHandlerMap,
} from './types'

const addTodo: TodoActionHandler<TodoActionType.ADD> = (state, action) => {
  const newTodo: Todo = {
    id: uuidv4(),
    title: action.payload,
    completed: false,
  }

  return [...state, newTodo]
}

const removeTodo: TodoActionHandler<TodoActionType.REMOVE> = (state, action) => {
  const newTodos = state.filter((todo) => todo.id !== action.payload.id)

  return newTodos
}

const toggleTodo: TodoActionHandler<TodoActionType.TOGGLE> = (state, action) => {
  const newTodos = state.map((todo) =>
    todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
  )

  return newTodos
}

const changeTodoTitle: TodoActionHandler<TodoActionType.CHANGE_TITLE> = (state, action) => {
  const newTodos = state.map((todo) =>
    todo.id === action.payload.todo.id ? { ...todo, title: action.payload.newTitle } : todo
  )

  return newTodos
}

const actionHandlerMap: TodoActionHandlerMap = {
  [TodoActionType.ADD]: addTodo,
  [TodoActionType.REMOVE]: removeTodo,
  [TodoActionType.TOGGLE]: toggleTodo,
  [TodoActionType.CHANGE_TITLE]: changeTodoTitle,
}

const initialState: TodoState = []

export const todoReducer = (state: TodoState = initialState, action: TodoAction) => {
  if (typeof actionHandlerMap[action.type] === 'function') {
    const actionHandler = actionHandlerMap[action.type] as TodoActionHandler<typeof action.type>

    return actionHandler(state, action)
  }

  return state
}
