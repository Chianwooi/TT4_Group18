import './App.css';

import { Router, Route, Switch, BrowserRouter } from "react-router-dom";

import Header from './components/Navbar'

import Home from './Pages/Home'

import Balance from './Pages/Balance'

import Transfer from './Pages/Transfer'

import History from './Pages/History'

import Login from './Pages/Login'

import { useState, useEffect } from 'react';

import { Container } from 'reactstrap';

import AuthenticatedRoute from './AuthenticatedRoute';



function App() {

  return (

    <>

      <div className='App mr-auto'>

        <header>

          <Header/>

        </header>

        <Container className="fluid">

          <BrowserRouter forceRefresh={true}>

            <Switch>

              <Route exact path='/' component={Login}></Route>

              <AuthenticatedRoute path='/home' component={Home} />

              <AuthenticatedRoute path='/balance' component={Balance} />

              <AuthenticatedRoute path='/transfer' component={Transfer} />

              <AuthenticatedRoute path='/history' component={History} />

            </Switch>

          </BrowserRouter>

        </Container>



      </div>

    </>

  );

}



export default App;