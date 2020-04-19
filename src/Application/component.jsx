import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import 'normalize.css'
import { reset, media, SIZE_XLG } from '../styles'

import { homePath } from './paths'
import Header from './Header/component'
import Home from '../pages/Home/component'

const GlobalStyle = createGlobalStyle`
  ${reset};
`
const PageWrap = styled.div`
  display: grid;
  grid-template:
    "header" 6rem
    "main" auto;
  height: 100vh;
`
const PageSpacer = styled.div`
  grid-area: main;
  margin: 0 auto;
  /* padding: ${SIZE_XLG} 4.2rem; */
  width: 100%;
  /* max-width: 92rem; */

  ${media.sm} {
    padding: 0 2.4rem;
    padding-bottom: 2.4rem;
  };
`

const Application = () => {
  return (
    <Router>
      <GlobalStyle />
      <PageWrap>
        <Header />
        <PageSpacer>
          <Switch>
            <Route exact path={homePath()} component={Home} />
            <Redirect to={homePath()} />
          </Switch>
        </PageSpacer>
      </PageWrap>
    </Router>
  )
}

export default Application
