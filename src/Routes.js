import {
  BrowserRouter,
  Switch,
  Route } from "react-router-dom";
import App from "./components/App";
import Store from "./components/Store"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Routes = () => {

  useEffect(() => { 
    
    Aos.init({

      duration: 2000
    });
  })

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/store" component={Store} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;