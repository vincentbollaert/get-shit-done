import { combineReducers } from 'redux'
import undoable from '../../reducers/undoable'
import { reducer as todos } from '../../reducers/todos'
import { reducer as calendar } from '../../reducers/calendar'
import { reducer as toast } from '../../components/Toast/reducer'

export default combineReducers({
  todos: undoable(todos),
  calendar,
  toast,
})
