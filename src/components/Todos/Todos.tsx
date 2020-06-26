import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react'
import { Todo } from '../../types'
import TodoItem from '../TodoItem/TodoItem'
import { v4 as uuid4 } from 'uuid'

interface Props {}

const Todos: FC<Props> = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      if (input.length > 0) {
        const newTodos: Todo[] = [
          ...todos,
          {
            id: uuid4(),
            title: input,
            completed: false,
          },
        ]

        setTodos(newTodos)
        setInput('')
      }
    }
  }

  const handleToggle = (todoToToggle: Todo) => {
    const newTodos = todos.map((todo) =>
      todo.id === todoToToggle.id ? { ...todo, completed: !todo.completed } : todo
    )

    setTodos(newTodos)
  }

  return (
    <div>
      <header>
        <h1>Todo App</h1>
      </header>
      <div>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  )
}

export default Todos
