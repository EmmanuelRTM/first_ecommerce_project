import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import User from './views/User';
import OneProduct from './views/OneProduct';
import ModifyProduct from './views/ModfiyProduct';
import NewProduct from './views/NewProduct';
import Cart from './components/Cart';
//import ShowProduct from './components/ShowProduct';

const Logout = () =>{
    window.localStorage.removeItem('token');
    return <Redirect to="/" />
}

function Routes(){

    return(
        <Router>
            <Switch>
                <Route exact path="/"  component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/user" component={User} />
                <Route exact path="/product/:idItem" component={OneProduct} />
                <Route exact path="/product/:idItem/edit" component={ModifyProduct} />
                <Route exact path="/product/post" component={NewProduct} />
                <Route exact path="/cart" component={Cart} />
                    {//Route exact path="/product/:idItem" component={ShowProduct}
                    }
            </Switch>
        </Router>
    )
}

export default Routes;