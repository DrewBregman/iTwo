import './index.css';
import BellIcon from './icons/bell.svg';
import MessengerIcon from './icons/messenger.svg';
import CaretIcon from './icons/caret.svg';
import PlusIcon from './icons/plus.svg';
import dataProfile from "../DataFetching";
import dataProject from "./dataProject";
import dataClubs from './dataClubs';
import dataDepartment from './dataDepartment';
import DropdownMenu from "../DropDown";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ExplorePage from "./components/ExplorePage";
import ProfileOne from "./components/ProfileOne";
import ProfileSelf from "./components/ProfileSelf";
import ScrollableTabsButtonForce from "./components/tabs";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Friend from "./components/PostTab/Friend";
import {
  MotionScene,
  MotionScreen,
  SharedElement,
  useMotion
} from "react-motion-layout";
import { MotionLayoutProvider } from "react-motion-layout";
import axios from 'axios';
import ProjectTab from './components/uProjectTab/ProjectTab';
import Project from './components/project/Project';
import Feed from './components/feed';
import Club from './components/Club/Club';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));




function App() {
  /*const data123 = JSON.parse(window._DEFAULT_DATA);*/

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [NavAnchorEl, setNavAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isNavMenuOpen = Boolean(NavAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNavMenuOpen = (event) => {
    setNavAnchorEl(event.currentTarget);
  };
  const handleNavMenuClose = (event) => {
    setNavAnchorEl(null);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link to="/p/1">Profile</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to="/project">My Projects</Link></MenuItem>
    </Menu>
  );
  const navMenuId = 'primary-search-account-menu-nav';
  const renderMenuNav = (
    <Menu
      NavAnchorEl={NavAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={navMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isNavMenuOpen}
      onClose={handleNavMenuClose}
    >
      <MenuItem onClick={handleNavMenuClose}><Link to="/explore">Explore</Link></MenuItem>
      <MenuItem onClick={handleNavMenuClose}><Link to="/">Home</Link></MenuItem>
      <MenuItem onClick={handleNavMenuClose}><Link to="/">Settings</Link></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleNavMenuOpen}>
      <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu-nav"
          aria-haspopup="true"
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <p>Menu</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Router>
    <div className="App">
      <Navbar>
      <AppBar position="static">
        <Toolbar>
          <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={navMenuId}
              aria-haspopup="true"
              onClick={handleNavMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Candle
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          </Toolbar>
          </AppBar>
        {renderMobileMenu}
        {renderMenu}
        {renderMenuNav}
      </Navbar>
      <MotionLayoutProvider>
      <Switch>
          <Route path="/about">
            <About />

          </Route>
          <Route path="/explore">
            <ExplorePage 
              />
          </Route>
          <Route path="/friend/:friendId">
            <Friend />
          </Route>
          <Route path="/feed/:id">
            <Feed />
          </Route>
          <Route path="/department/:id">
            Hello There
          </Route>
          <Route path="/club/:id" component={dataClubs}>
            <Club />
          </Route>
          <Route path="/editprofile">
            <h1>Edit Profile</h1>
          </Route>
          <Route exact path="/p/:id" component={dataProfile}>
            <ProfileOne
            /*name='hello'
            description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            followers = '245'
            following = {window.REP_LOG_APP_PROPS.cat}
            major={profile1.Major}
            company={profile1.company}
            year='2023'
            day='Saturday Afternoons'
            experienceOne='Leader of non-violent independence movement against British rule'
            experienceTwo='Organized boycotts against British institutions in peaceful forms of civil disobedience'
            experienceThree='Formed Natal Indian Congress in 1894 to fight discrimination'*/
            />
          </Route>
          <Route exact path="/p/self/:id" component={dataProfile}>
            <ProfileSelf
                        />
          </Route>
          <Route exact path="/project/:id" component={dataProject}>
            <Project />
          </Route>
        </Switch>
        </MotionLayoutProvider>
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

