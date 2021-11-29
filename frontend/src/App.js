import "./CSS/css/styles.css";
import PreviousMysteries from "./components/pages/previous-mysteries";
import Homepage from "./components/pages/home-page";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import Suggest from "./components/pages/suggest-page"
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
