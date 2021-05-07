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

function App() {
  const [token, setToken] = useState();

  const checkLocalStorage = () => {
    let currentUser = localStorage.getItem('user')
    setToken(currentUser)
  }

  useEffect(() => {
    checkLocalStorage()
    return () => {
    }
  }, [])

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <div className='App mr-auto'>
        <header>
          <Header/>
        </header>
        <Container className="fluid">
          <BrowserRouter>
            <Switch>
              <Route path='/balance' component={Balance}></Route>
              <Route path='/transfer' component={Transfer}></Route>
              <Route path='/history' component={History}></Route>
            </Switch>
          </BrowserRouter>
        </Container>

      </div>
    </>
  );
}

export default App;
