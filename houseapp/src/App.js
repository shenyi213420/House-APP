import React, { Component } from 'react'

import {HashRouter,Route,Switch} from 'react-router-dom'
import Store from './Store'
import { Provider } from 'react-redux'


import Login from './pages/Login'//登录

import Reg from './pages/Reg' //注册

import Nav from './pages/Nav/Nav'//导航

import SelectCity from './pages/SelectCity'

import Error from './pages/Error'
import Search from './pages/Search'
import Map from './pages/Map'
import Active from './pages/Active'

import Forgetpwd from './pages/Forgetpwd'
export default class App extends Component {
  render() {
    return (
        <Provider store={Store}>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={ Nav }></Route>
            <Route path='/reg' component={ Reg }></Route>
            <Route path='/login' component={ Login }></Route>
            <Route path='/forgetpwd' component={ Forgetpwd }></Route>
            <Route path='/selectcity' component={ SelectCity }></Route>
            <Route path='/search' component={ Search }></Route>
            <Route path='/map' component={ Map }></Route>
            <Route path='/active' component={ Active }></Route>

            {/* 404页面 */}
            <Route component={ Error }></Route>
          </Switch>
        </HashRouter>
        </Provider>
    )
  }
}
