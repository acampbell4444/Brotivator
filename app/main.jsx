'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'

import HomeContainer from './containers/HomeContainer'
import TeamContainer from './containers/TeamContainer'
import NewTeamModalContainer from './containers/NewTeamModalContainer'

import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

import {whoami} from './reducers/auth'

const Brotivator = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)

const onHomeEnter = () => store.dispatch(whoami())

const onTeamEnter = () => store.dispatch(whoami())

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Brotivator}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={HomeContainer} onEnter={onHomeEnter} />
        <Route path="/user/:userId/team" component={TeamContainer} onEnter={onTeamEnter} />
        <Route path="/user/:userId/team/newTeamModal" component={NewTeamModalContainer} />
      </Route>

      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
