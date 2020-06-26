import { Store, createStore } from 'redux'
import { AppState, AppAction } from './types'
import { rootReducer } from './reducer'

const configureStore = (initialState?: AppState): Store<AppState, AppAction> => {
  const store = createStore(rootReducer, initialState)

  return store
}

export default configureStore
