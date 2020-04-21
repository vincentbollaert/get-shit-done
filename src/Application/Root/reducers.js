import { combineReducers } from 'redux'
import undoable from '../../state/undoable'
import { reducer as todos } from '../../state/todos/reducer'
import { reducer as toastMessages } from '../../components/ToastMessages/reducer'

export default combineReducers({
  todos: undoable(todos),
  toastMessages,
})
