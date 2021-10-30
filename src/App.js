import logo from './logo.svg';
import './App.css';
import Header from './pages/shared/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './pages/shared/Footer/Footer';
import Home from './pages/homePage/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
