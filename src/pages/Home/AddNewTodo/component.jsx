import React from 'react'
import { useForm } from 'react-hook-form'

function AddNewTodo({ addNewTodo }) {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => addNewTodo(data)
  console.log(errors)
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Add todo" name="todo" ref={register({required: true, maxLength: 80})} />

      <input type="submit" />
    </form>
  )
}

export default AddNewTodo
