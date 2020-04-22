import { configureStore } from '@reduxjs/toolkit'

import reducers from './reducers'

const store = configureStore({
  reducer: reducers,
})

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducers', () => store.replaceReducer(reducers))
}

export default store

