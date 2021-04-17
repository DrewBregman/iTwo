import './index.css';
import BellIcon from './icons/bell.svg';
import MessengerIcon from './icons/messenger.svg';
import CaretIcon from './icons/caret.svg';
import PlusIcon from './icons/plus.svg';
import DataFetching from "../DataFetching";
import DropdownMenu from "../DropDown";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<CaretIcon />}>
          <h1> Hello World </h1>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      
      <Switch>
          <Route path="/about">
            <About />
            <DataFetching />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/editprofile">
            <h1>Edit Profile</h1>
          </Route>
          <Route path="/profile">
            <h1>Edit Profile</h1>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}


function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}





export default App;

/*const container = document.getElementById("app");
render(<App />, container); */

