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
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import AddDestinations from './pages/AddDestinations/AddDestinations';

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
            <PrivateRoute path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/adddestinations">
              <AddDestinations></AddDestinations>
            </PrivateRoute>
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
