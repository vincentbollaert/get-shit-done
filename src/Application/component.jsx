import React from 'react'
import store from './Root/store'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import 'normalize.css'
import { reset } from '../styles'

import { homePath } from './paths'
import Home from '../pages/Home/component'
import { Provider } from 'react-redux'

const GlobalStyle = createGlobalStyle`
  ${reset};
`
const PageWrap = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
`

const Application = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <PageWrap>
          <Switch>
            <Route exact path={homePath()} component={Home} />
            <Redirect to={homePath()} />
          </Switch>
        </PageWrap>
      </Router>
    </Provider>
  )
}

export default Application
