import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import TextField from '../../../components/form/Field/component'

function AddNewTodo({ addNewTodo }) {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => addNewTodo(data)
  const errorMessage = (errors.todo || {}).type
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        theme='light'
        name="todo"
        placeholder="add todo"
        errorMessage={errorMessage}
        inputRef={register({ required: true, maxLength: 80 })}
      />

      <input type="submit" />
    </form>
  )
}

export default AddNewTodo
