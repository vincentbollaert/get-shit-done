import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import store from './Root/store'
import 'normalize.css'
import { reset } from '../styles'

import { homePath } from './paths'
import Home from '../pages/Home/component'
import SWUpdate from '../components/SWUpdate/component'

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
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false)

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered')

        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setIsUpdateAvailable(true)
            }
          })
        })

      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
    })
  }

  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <PageWrap>
          <Switch>
            <Route exact path={homePath()} component={Home} />
            <Redirect to={homePath()} />
          </Switch>
          <SWUpdate isUpdateAvailable={isUpdateAvailable} />
        </PageWrap>
      </Router>
    </Provider>
  )
}

export default Application
