import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/App";
import Store from "./components/Store"
const Routes = () => {
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