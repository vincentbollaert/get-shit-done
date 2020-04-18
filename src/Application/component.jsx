import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import 'normalize.css'
import { reset, media, BOX_SHADOW_LIGHT, WHITE, SIZE_XLG } from '../styles'

import { homePath } from './paths'
import Header from './Header/component'
import Home from '../pages/Home/component'

const GlobalStyle = createGlobalStyle`
  ${reset};
`
const PageWrap = styled.div`
  display: grid;
  grid-template:
    "header header" 6rem
    "main main" auto
    / 16rem auto;
  height: 100vh;
`
const PageSpacer = styled.div`
  grid-area: main;
  margin: 0 auto;
  padding: ${SIZE_XLG} 4.2rem;
  width: 100%;
  max-width: 92rem;

  ${media.sm} {
    padding: 6rem 8.2rem;
  };
`
const ContentWrap = styled.div`
  position: relative;
  padding: 2.8rem 0;
  height: 100%;
  background-color: ${WHITE};
  box-shadow: ${BOX_SHADOW_LIGHT};
`

const Application = () => {
  return (
    <Router>
      <GlobalStyle />
      <PageWrap>
        <Header />
        <PageSpacer>
          <ContentWrap>
            <Switch>
              <Route exact path={homePath()} component={Home} />
              <Redirect to={homePath()} />
            </Switch>
          </ContentWrap>
        </PageSpacer>
      </PageWrap>
    </Router>
  )
}

export default Application
