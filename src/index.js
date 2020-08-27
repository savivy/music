import React from 'react';
import ReactDOM from 'react-dom';
import MapRoute from './routes/MaoRoute'
import routes from './routes/routes'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import axios from 'axios'
// import './assets/public.css'
import './assets/reset.css'
import './assets/js/rem'
React.Component.prototype.$http=axios
ReactDOM.render(
  <BrowserRouter>
      <MapRoute routes={routes}>

      </MapRoute>
      {/* <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Redirect path="/" to="/home"></Redirect>
      </Switch> */}
  </BrowserRouter>
   
 ,
  document.getElementById('root')
);

