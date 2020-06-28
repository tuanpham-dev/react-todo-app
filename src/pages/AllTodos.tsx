import React, { FC } from 'react'
import { AppState } from '../store/types'
import { connect, ConnectedProps } from 'react-redux'
import Todos from '../components/Todos/Todos'

const mapState = (state: AppState) => ({
  todos: state.todo,
})

const connector = connect(mapState)

type Props = ConnectedProps<typeof connector>

const AllTodos: FC<Props> = ({ todos }) => <Todos todos={todos} />

export default connector(AllTodos)
