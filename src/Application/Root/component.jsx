import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { createPromise } from 'redux-promise-middleware'

import Application from '../component'
import reducers from './reducers'

const Root = () => {
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

  return (
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route
            path="/"
            render={props => <Application {...props} />}
          />
        </Switch>
      </Router>
    </Provider>
  )
}

export default Root
