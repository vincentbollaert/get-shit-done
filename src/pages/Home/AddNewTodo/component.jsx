import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import TextField from '../../../components/form/Field/component'
import { SIZE_LG } from '../../../styles'

const Form = styled.form`
  margin-bottom: ${SIZE_LG};
`
function AddNewTodo({ addNewTodo }) {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => addNewTodo(data)
  const errorMessage = (errors.todo || {}).type
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        theme='light'
        name="todo"
        placeholder="add todo"
        errorMessage={errorMessage}
        inputRef={register({ required: true, maxLength: 80 })}
      />
    </Form>
  )
}

export default AddNewTodo
