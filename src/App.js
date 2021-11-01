import './App.css';
import Header from './pages/Header/Header';
import Services from './pages/Services/Services';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import MyOrder from './pages/MyOrder/MyOrder';
import Inventory from './pages/Inventory/Inventory';
import NotFound from './pages/NotFound/NotFound';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Delivery from './pages/Delivery/Delivery';
import HomeService from './pages/HomeService/HomeService';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';


function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <HomeService></HomeService>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/service">
            <Services></Services>
          </PrivateRoute>
          <Route path="/order">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <PrivateRoute path="/delivery">
            <Delivery></Delivery>
          </PrivateRoute>
          <PrivateRoute path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
