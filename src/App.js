import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/profile">Profile</Link> | <Link to="/posts">Expenses</Link>
        </nav>{" "}
      </header>
    </div>
  );
}

export default App;
