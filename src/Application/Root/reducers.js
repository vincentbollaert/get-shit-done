import { combineReducers } from 'redux'
import todosReducer from '../../state/todos/reducer'

export default combineReducers({
  todos: todosReducer,
})
