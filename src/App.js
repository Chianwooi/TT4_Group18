import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Header from './components/Navbar'
import Home from './Pages/Home'
import Balance from './Pages/Balance'
import Transfer from './Pages/Transfer'
import History from './Pages/History'

function App() {
  return (
    <>
      <div className='App'>
        <Header/>
        <BrowserRouter>
          <Route exact path='/' component={Home}></Route>
          <Route path='/balance' component={Balance}></Route>
          <Route path='/transfer' component={Transfer}></Route>
          <Route path='/history' component={History}></Route>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
