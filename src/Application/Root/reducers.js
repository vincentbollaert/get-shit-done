import { combineReducers } from 'redux'
import { reducer as todosReducer } from '../../state/todos/reducer'

export default combineReducers({
  todos: todosReducer,
})
