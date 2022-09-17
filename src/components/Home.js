import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import Product from './Product';
import MyCart from './MyCart';

function Home() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Product} />
                <Route exact path='/mycart' component={MyCart} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default Home;