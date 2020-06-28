import React, { FC, useState, KeyboardEvent } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { StyledTodos } from './styles'
import { addTodo, clearCompletedTodo } from '../../store/todo/actions'
import { ConnectedProps, connect } from 'react-redux'
import { TodoState } from '../../store/todo/types'

const mapDispatch = {
  addTodo,
  clearCompletedTodo,
}

const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {
  todos: TodoState
}

const Todos: FC<Props> = ({ todos, addTodo, clearCompletedTodo }) => {
  const [input, setInput] = useState<string>('')

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
      <StyledTodos.Toolbar>
        <StyledTodos.Status>{todos.length} Item(s)</StyledTodos.Status>
        <StyledTodos.Link to="/" exact>
          All
        </StyledTodos.Link>
        <StyledTodos.Link to="/active">Active</StyledTodos.Link>
        <StyledTodos.Link to="/completed">Completed</StyledTodos.Link>
        <StyledTodos.ClearButton onClick={clearCompletedTodo}>
          Clear Completed
        </StyledTodos.ClearButton>
      </StyledTodos.Toolbar>
      <div>
        <StyledTodos.Input
          type="text"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
