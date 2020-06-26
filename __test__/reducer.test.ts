import { AppState } from '../src/store/types'
import { TodoActionType, TodoState } from '../src/store/todo/types'
import { rootReducer } from '../src/store/reducer'

const initialState: AppState = {
  todo: [],
}

const sampleTodos: TodoState = [
  {
    id: '1',
    title: 'Buy a book',
    completed: false,
  },
  {
    id: '2',
    title: 'Run a mile',
    completed: false,
  },
]

describe('root reducer', () => {
  it('should return initial state', () => {
    const reducer = rootReducer(initialState, {} as any)

    expect(reducer).toEqual(initialState)
  })

  it('should handle TOODO/ADD', () => {
    const reducer = rootReducer(initialState, {
      type: TodoActionType.ADD,
      payload: 'Buy a book',
    })

    expect(reducer.todo).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Buy a book',
          completed: false,
        }),
      ])
    )
  })

  it('should handle TODO/REMOVE', () => {
    const reducer = rootReducer(
      { ...initialState, todo: sampleTodos },
      {
        type: TodoActionType.REMOVE,
        payload: sampleTodos[1],
      }
    )

    expect(reducer.todo).toEqual([sampleTodos[0]])
  })

  it('should handle TODO/TOGGLE', () => {
    const reducer = rootReducer(
      { ...initialState, todo: sampleTodos },
      {
        type: TodoActionType.TOGGLE,
        payload: sampleTodos[1],
      }
    )

    expect(reducer.todo).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          completed: true,
        }),
      ])
    )
  })

  it('should handle TODO/CHANGE_TITLE', () => {
    const reducer = rootReducer(
      { ...initialState, todo: sampleTodos },
      {
        type: TodoActionType.CHANGE_TITLE,
        payload: {
          todo: sampleTodos[1],
          newTitle: 'Run two miles',
        },
      }
    )

    expect(reducer.todo).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Run two miles',
        }),
      ])
    )
  })
})
