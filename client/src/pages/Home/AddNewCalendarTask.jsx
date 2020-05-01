import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import TextField from '../../components/form/Field/component'
import Button from '../../components/Button/component'
import Colorpicker from '../../components/Colorpicker/component'
import { useSelector } from 'react-redux'
import Dropdown from '../../components/form/Dropdown'

const Form = styled.form``
function AddNewCalendarTask({ from, addNewTask }) {
  const [[colorName, colorValue], setSelectedColor] = useState([])
  const [selectedGroup, setSelectedGroup] = useState(undefined)
  const { groups } = useSelector(state => state.settings)
  const { register, handleSubmit, errors } = useForm({ defaultValues: { from } })
  const onSubmit = data => addNewTask({
    ...data,
    color: { colorName, colorValue },
  })
  const isError = Object.entries(errors).length > 0

  console.log('selectedGroup', selectedGroup)


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
      <Dropdown list={groups} label="select group" displayName="name" onSelect={setSelectedGroup} />
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
      <Colorpicker selectedColor={colorValue} setSelectedColor={setSelectedColor} />
      <Button isDisabled={isError} isInForm type="submit">Add new task</Button>
    </Form>
  )
}

export default AddNewCalendarTask
