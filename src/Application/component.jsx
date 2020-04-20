import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import 'normalize.css'
import { reset, media, SIZE_XLG } from '../styles'

import { homePath } from './paths'
import Home from '../pages/Home/container'

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
    <Router>
      <GlobalStyle />
      <PageWrap>
        <Switch>
          <Route exact path={homePath()} component={Home} />
          <Redirect to={homePath()} />
        </Switch>
      </PageWrap>
    </Router>
  )
}

export default Application
