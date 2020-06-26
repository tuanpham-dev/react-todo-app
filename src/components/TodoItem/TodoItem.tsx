import React, { FC } from 'react'
import { Todo } from '../../types'

interface Props {
  todo: Todo
  onToggle: (todo: Todo) => void
}

const TodoItem: FC<Props> = ({ todo, onToggle }) => {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)} />
      <span>{todo.title}</span>
    </li>
  )
}

export default TodoItem
