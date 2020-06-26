import React, { FC } from 'react'
import { Todo } from '../../types'
import { StyledTodoItem } from './styles'

interface Props {
  todo: Todo
  onToggle: (todo: Todo) => void
}

const TodoItem: FC<Props> = ({ todo, onToggle }) => {
  return (
    <StyledTodoItem.Wrapper>
      <StyledTodoItem.Checkbox
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo)}
      />
      <StyledTodoItem.Label>{todo.title}</StyledTodoItem.Label>
    </StyledTodoItem.Wrapper>
  )
}

export default TodoItem
