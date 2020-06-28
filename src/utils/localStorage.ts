import { AppState } from '../store/types'

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todo-app-state')

    if (serializedState === null) {
      return undefined
    }

    return JSON.parse(serializedState)
  } catch {
    return undefined
  }
}

export const saveState = (state: AppState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('todo-app-state', serializedState)
  } catch {}
}
