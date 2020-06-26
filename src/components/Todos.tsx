import React, { FC } from 'react'
import { Todo } from '../types'
import TodoItem from './TodoItem'

interface Props {}

const Todos: FC<Props> = () => {
  const todos: Todo[] = [
    {
      id: '1',
      title: 'Read a book',
      completed: false,
    },
    {
      id: '2',
      title: 'Run a mile',
      completed: false,
    },
  ]

  return (
    <div>
      <header>
        <h1>Todo App</h1>
      </header>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default Todos
