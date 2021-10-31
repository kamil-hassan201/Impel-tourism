import logo from './logo.svg';
import './App.css';
import Header from './pages/shared/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './pages/shared/Footer/Footer';
import Home from './pages/homePage/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ContextProvider from './context/ContextProvider/ContextProvider';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders';
import ManageOrders from './pages/ManageOrders/ManageOrders';

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
            <Route path="/manageorders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="*">
              <h2>Not Found</h2>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
