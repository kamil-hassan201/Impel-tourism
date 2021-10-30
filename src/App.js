import logo from './logo.svg';
import './App.css';
import Header from './pages/shared/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './pages/shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/">

          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
