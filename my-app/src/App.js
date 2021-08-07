import "./CSS/css/styles.css";
import PreviousMysteries from "../src/components/pages/previous-mysteries";
import Homepage from "../src/components/pages/home-page";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import Suggest from "../../my-app/src/components/pages/suggest-page"
function App() {
  return (
    <Router>
      <div className="App">
      <Route path="/suggest" exact>
          <Suggest />
        </Route>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/previous">
          <PreviousMysteries />
        </Route>
      </div>
    </Router>
  );
}

export default App;
