import './App.css';
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

import IndexPage from "./pages/IndexPage"

function App() {
  return (
      (<Router>
        <Switch>
          <Route exact path={"/"}>
            <IndexPage></IndexPage>
          </Route>
        </Switch>
      </Router>)
  );
}

export default App;
