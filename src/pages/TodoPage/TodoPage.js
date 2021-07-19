import React from 'react'
import Todo from '../../components/Todo/Todo'
import { Container } from 'react-bootstrap'

export default function TodoPage() {
  return (
    <div>
      <Container>
        <Todo />
      </Container>
    </div>
  )
}