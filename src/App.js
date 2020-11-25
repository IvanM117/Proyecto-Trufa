import "./App.css";

// Páginas
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import MakeBox from "./pages/MakeBox"

//Componentes
import NavBar from "./components/NavBar"

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/MakeBox" component={MakeBox} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
