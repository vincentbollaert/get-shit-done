import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createPromise } from 'redux-promise-middleware'

import reducers from './reducers'

const store = configureStore({
  reducer: reducers,
  middleware: [
    ...getDefaultMiddleware(),
    createPromise({
      promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAIL']
    }),
  ],
})

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducers', () => store.replaceReducer(reducers))
}

export default store

