import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { createPromise } from 'redux-promise-middleware'

import Application from '../component'
import reducers from './reducers'

const Root = () => {
  const store = createStore(
    reducers,
    undefined,
    compose(
      applyMiddleware(
        reduxThunk,
        createPromise({
          promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAIL']
        })
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

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
