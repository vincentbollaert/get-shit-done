import { combineReducers } from 'redux'
import { reducer as todos } from '../../state/todos/reducer'
import { reducer as toastMessages } from '../../components/ToastMessages/reducer'

export default combineReducers({
  todos,
  toastMessages,
})
