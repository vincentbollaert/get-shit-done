import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import TextField from '../../components/form/Field/component'
import Button from '../../components/Button/component'
import Dropdown from '../../components/form/Dropdown'
import { actions } from '../../reducers/calendar'

const Form = styled.form``

function AddNewCalendarTask() {
  const dispatch = useDispatch()
  const { taskBeingPrepared: { from } } = useSelector(state => state.calendar)


  const [selectedGroup, setSelectedGroup] = useState(undefined)
  const { groups } = useSelector(state => state.settings)
  const { register, handleSubmit, errors } = useForm({ defaultValues: { from } })
  const onSubmit = data => dispatch(actions.addTask({
    ...data,
    group: selectedGroup,
  }))

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
      <Dropdown
        isInForm
        theme="light"
        label="select group"
        list={groups}
        displayName="name"
        onSelect={setSelectedGroup}
      />
      <TextField
        isInForm
        defaultValue={from}
        theme='light'
        name="from"
        placeholder="time from"
        errorMessage={errors.from?.type}
        inputRef={register({ required: true, maxLength: 80 })}
      />
      <TextField
        isInForm
        theme='light'
        name="to"
        placeholder="time to"
        errorMessage={errors.to?.type}
        inputRef={register({ required: true, maxLength: 80 })}
      />
      <Button
        isDisabled={Object.entries(errors).length > 0}
        isInForm
        accentColor={selectedGroup?.color.value}
        type="submit"
      >
        Add new task
      </Button>
    </Form>
  )
}

export default AddNewCalendarTask
