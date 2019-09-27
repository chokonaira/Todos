import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import TodosList from './Components/todos-list';
import EditTodos from './Components/edit-todos';
import CreateTodos from './Components/create-todos';
import "./App.css";
import Logo from './logo.png';


function App() {
  return (
    <Router> 
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://softcom.ng" target="_blank" rel="noopener noreferrer">

          <img src={Logo} width="30" height="30" alt="softcomeAssessment" />
        </a>
        <Link to="/" className="navbar-brand">Todos</Link> 
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Todos</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Todos</Link>
            </li>
          </ul>

        </div>
      </nav>
    <Route path="/" exact component={TodosList} />
    <Route path="/edit/:id" component={EditTodos} />
    <Route path="/create" component={CreateTodos} />
    </div>
    

    </Router>
  );
}

export default App;
