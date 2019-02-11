import store from '@src/client/state/store'
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/templates/home'

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
