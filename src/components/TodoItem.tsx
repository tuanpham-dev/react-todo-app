import React, { FC } from 'react'
import { Todo } from '../types'

interface Props {
  todo: Todo
}

const TodoItem: FC<Props> = ({ todo }) => {
  return (
    <li>
      <span>{todo.title}</span>
    </li>
  )
}

export default TodoItem
