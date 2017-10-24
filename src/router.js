import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Store from './components/Store/Store';
import Checkout from './components/Checkout/Checkout';
import Details from './components/Details/Details';



export default (
<Switch>
<Route exact path="/" component= {Store}/>
<Route path="/details:id" component={Details}/>
<Route path="/checkout" component={ Checkout }/>
</Switch>

)