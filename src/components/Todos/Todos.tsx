import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { StyledTodos } from './styles'
import { AppState } from '../../store/types'
import { addTodo } from '../../store/todo/actions'
import { ConnectedProps, connect } from 'react-redux'

const mapState = (state: AppState) => ({
  todos: state.todo,
})

const mapDispatch = {
  addTodo,
}

const connector = connect(mapState, mapDispatch)

type Props = ConnectedProps<typeof connector>

const Todos: FC<Props> = ({ todos, addTodo }) => {
  const [input, setInput] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      if (input.length > 0) {
        addTodo(input)
        setInput('')
      }
    }
  }

  return (
    <StyledTodos.Wrapper>
      <StyledTodos.Header>
        <h1>Todo App</h1>
      </StyledTodos.Header>
      <div>
        <StyledTodos.Input
          type="text"
          placeholder="What needs to be done?"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <StyledTodos.List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </StyledTodos.List>
    </StyledTodos.Wrapper>
  )
}

export default connector(Todos)
