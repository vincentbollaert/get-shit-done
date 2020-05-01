import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import TextField from '../../components/form/Field/component'
import { SIZE_MD } from '../../styles'

const Form = styled.form``
function AddNewCalendarTask({ from, addNewTask }) {
  const { register, handleSubmit, errors } = useForm({ defaultValues: { from } })
  const onSubmit = data => addNewTask(data)
  // const errorMessage = (errors.task || {}).type
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        isInForm
        theme='light'
        name="task"
        placeholder="add task"
        // errorMessage={errorMessage}
        inputRef={register({ required: true, maxLength: 80 })}
      />
      <TextField
        isInForm
        theme='light'
        name="group"
        placeholder="add group"
        // errorMessage={errorMessage}
        inputRef={register({ required: true, maxLength: 80 })}
      />
      <TextField
        isInForm
        defaultValue={from}
        theme='light'
        name="from"
        type='number'
        placeholder="from"
        // errorMessage={errorMessage}
        inputRef={register({ required: true, maxLength: 80 })}
      />
      <TextField
        isInForm
        theme='light'
        name="to"
        type='number'
        placeholder="to"
        // errorMessage={errorMessage}
        inputRef={register({ required: true, maxLength: 80 })}
      />
      <input type="submit" />
    </Form>
  )
}

export default AddNewCalendarTask
