import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Services from "./routes/services";
import Gallery from "./routes/gallery";
import Contact from "./routes/contact";
import About from "./routes/about";
import Team from "./routes/team";
import Home from "./routes/home";

import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">

      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <br />
        <Route path="/contact" axact component={Contact} />
        <Route path="/team" axact component={Team} />
        <Route path="/gallery" axact component={Gallery} />
        <Route path="/services" axact component={Services} />
        <Route path="/about" axact component={About} />
        <Route path="/" exact component={Home} />

      </Router>

    </div>
  );
}

export default App;
