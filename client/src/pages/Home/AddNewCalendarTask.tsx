import React, { useState, useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import TextField from '../../components/form/Field/component'
import Button from '../../components/Button/component'
import Dropdown from '../../components/form/Dropdown'
import { actions } from '../../reducers/calendar'

const Form = styled.form``

function AddNewCalendarTask({ dateString, timeFrom, onModalClose }) {
  const dispatch = useDispatch()
  const [selectedGroup, setSelectedGroup] = useState()
  const { groups } = useSelector(state => state.settings)
  const { register, handleSubmit, errors, watch } = useForm({ defaultValues: { from: timeFrom } })
  const onSubmit = data => {
    dispatch(actions.addTask({ ...data, dateString, group: selectedGroup }))
    onModalClose()
  }
  const watchedFields = watch()

  useEffect(() => {
    dispatch(actions.prepareTask({
      ...watchedFields,
      group: selectedGroup,
    }))
  }, [watchedFields, selectedGroup])

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
        listKey="name"
        onSelect={group => setSelectedGroup(group)}
        inputRef={register({ required: true, maxLength: 80 })}
      />
      <TextField
        isInForm
        defaultValue={timeFrom}
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
        accentColor={selectedGroup?.group?.color.value}
        type="submit"
      >
        Add new task
      </Button>
    </Form>
  )
}

export default memo(AddNewCalendarTask)
