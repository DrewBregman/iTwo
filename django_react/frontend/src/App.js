import './index.css';
import BellIcon from './icons/bell.svg';
import MessengerIcon from './icons/messenger.svg';
import CaretIcon from './icons/caret.svg';
import PlusIcon from './icons/plus.svg';
import DataFetching from "../DataFetching";
import DropdownMenu from "../DropDown";
import React, { useState } from 'react';
/*declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}
*/
function App() {
  return (
    <div className="App">
      
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      <DataFetching />
    </div>
  );
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

