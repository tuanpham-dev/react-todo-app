import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react'
import { Todo } from '../../types'
import { StyledTodoItem } from './styles'
import { toggleTodo, removeTodo, changeTodoTitle } from '../../store/todo/actions'
import { connect, ConnectedProps } from 'react-redux'

const mapDispatch = {
  removeTodo,
  toggleTodo,
  changeTodoTitle,
}

const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {
  todo: Todo
}

const TodoItem: FC<Props> = ({ todo, removeTodo, toggleTodo, changeTodoTitle }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [input, setInput] = useState<string>(todo.title)

  const handleDoubleClick = () => {
    setIsEditing(true)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const updateTitle = (update = true) => {
    if (input.length === 0 || !update) {
      setInput(todo.title)
      setIsEditing(false)
    } else {
      changeTodoTitle(todo, input)
      setIsEditing(false)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      updateTitle()
    } else if (e.key === 'Escape' || e.keyCode === 27) {
      updateTitle(false)
    }
  }

  const handleLostFocus = () => {
    updateTitle()
  }

  return (
    <StyledTodoItem.Wrapper>
      {isEditing ? (
        <StyledTodoItem.Input
          type="text"
          autoFocus={true}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleLostFocus}
        />
      ) : (
        <>
          <StyledTodoItem.Checkbox
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo)}
          />
          <StyledTodoItem.Label onDoubleClick={handleDoubleClick}>
            {todo.title}
          </StyledTodoItem.Label>
          <StyledTodoItem.RemoveButton onClick={() => removeTodo(todo)}>
            ×
          </StyledTodoItem.RemoveButton>
        </>
      )}
    </StyledTodoItem.Wrapper>
  )
}

export default connector(TodoItem)
