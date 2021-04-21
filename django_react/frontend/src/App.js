import './index.css';
import BellIcon from './icons/bell.svg';
import MessengerIcon from './icons/messenger.svg';
import CaretIcon from './icons/caret.svg';
import PlusIcon from './icons/plus.svg';
import dataProfile from "../DataFetching";
import DropdownMenu from "../DropDown";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from "./components/Profile";
import ExplorePage from "./components/ExplorePage";
import ProfileOne from "./components/ProfileOne";
import ScrollableTabsButtonForce from "./components/tabs";

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

          </Route>
          <Route path="/explore">
            <ExplorePage 
              title='Card Title'
              imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Portrait_Gandhi.jpg/399px-Portrait_Gandhi.jpg'
              body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              />
          </Route>
          <Route path="/editprofile">
            <h1>Edit Profile</h1>
          </Route>
          <Route exact path="/p/:id" component={dataProfile}>
            <ProfileOne 
            name='Mahatma Gandhi'
            description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            followers = '245'
            following = '185'
            major='Law'
            company='D2'
            year='2023'
            day='Saturday Afternoons'
            experienceOne='Leader of non-violent independence movement against British rule'
            experienceTwo='Organized boycotts against British institutions in peaceful forms of civil disobedience'
            experienceThree='Formed Natal Indian Congress in 1894 to fight discrimination'
            />
          </Route>
          <Route path="/profile">
            <div className="wrapper">
              <Profile 
              name='Mahatma Gandhi'
              description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              followers = '245'
              following = '185'
              major='Philosophy'
              />
            </div>
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

