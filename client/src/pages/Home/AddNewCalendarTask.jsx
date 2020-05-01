import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import TextField from '../../components/form/Field/component'
import Button from '../../components/Button/component'
import Colorpicker from '../../components/Colorpicker/component'

const Form = styled.form``
function AddNewCalendarTask({ from, addNewTask }) {
  const { register, handleSubmit, errors } = useForm({ defaultValues: { from } })
  const onSubmit = data => addNewTask(data)
  const isError = Object.entries(errors).length > 0
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        isInForm
        theme='light'
        name="name"
        placeholder="name"
        errorMessage={errors.name?.type}
        inputRef={register({ required: true, maxLength: 80 })}
      />
      <TextField
        isInForm
        theme='light'
        name="group"
        placeholder="group"
        errorMessage={errors.group?.type}
        inputRef={register({ required: true, maxLength: 80 })}
      />
      <TextField
        isInForm
        defaultValue={from}
        theme='light'
        name="from"
        type='number'
        placeholder="time from"
        errorMessage={errors.from?.type}
        inputRef={register({ required: true, maxLength: 80 })}
      />
      <TextField
        isInForm
        theme='light'
        name="to"
        type='number'
        placeholder="time to"
        errorMessage={errors.to?.type}
        inputRef={register({ required: true, maxLength: 80 })}
      />
      <Colorpicker />
      <Button isDisabled={isError} isInForm type="submit">Add new task</Button>
    </Form>
  )
}

export default AddNewCalendarTask
