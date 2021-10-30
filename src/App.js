import logo from './logo.svg';
import './App.css';
import Header from './pages/shared/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './pages/shared/Footer/Footer';
import Home from './pages/homePage/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ContextProvider from './context/ContextProvider/ContextProvider';

function App() {
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/signin">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
