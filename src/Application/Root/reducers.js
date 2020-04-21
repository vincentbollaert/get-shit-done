import { combineReducers } from 'redux'
import undoable from '../../state/undoable'
import { reducer as todos } from '../../state/todos/reducer'
import { reducer as toast } from '../../components/Toast/reducer'

export default combineReducers({
  todos: undoable(todos),
  toast,
})
