import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import TimelineIcon from '@material-ui/icons/Timeline';
import GroupIcon from '@material-ui/icons/Group';
import PostAddIcon from '@material-ui/icons/PostAdd';
import About from "./About";
import { useState, useEffect } from "react";
import axios from "axios";
import ClubMembers from './ClubMembers';


const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  grid: {
    backgroundColor: 'blue',
  },
  paper: {
    padding: theme.spacing(2),
    flexGrow: 1,
    backgroundColor: 'white',
    },
  tabs: {
    padding: theme.spacing(2),
    flexGrow: 1,
    backgroundColor: 'white',
    alignContent: 'center',
    }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

function getClub(club_id){
  const [clubs, setClubs] = useState([])

  useEffect(() => {
      const str = "/api/club/" + club_id 
      axios.get(str)
          .then(res =>{
              console.log(res)
              setClubs(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  }, [])


    
  return (
                  clubs
  )
}


export default function Club() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const club = getClub(club_id);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
    <Paper className={classes.paper} elevation={3}>
    <Grid container spacing={3}>

      <Grid item xs={4} lg={2}>
        <IconButton>
                      <Avatar 
                          variant="square"
                          src="https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9ja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 
                          style={{
                          margin: "10px",
                          width: "160px",
                          height: "160px",
                          }} 
                          />
          </IconButton>
      </Grid>
      <Grid item container xs={8} lg={10}>
        <Grid item xs={12}>
          Club {club.name}
        </Grid> 
        <Grid item xs={12}>
          {club.description}
        </Grid>  
        <Grid item xs={12}>
          Number Members
        </Grid>
        <Grid item xs={12}>
          Department
        </Grid>                              
      </Grid>
      
    </Grid>
    </Paper>         
    <Grid className={classes.nav} item xs={12}>
        <AppBar position="static" color="white">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="About" icon={<InfoIcon />} {...a11yProps(0)} />
            <Tab label="Members" icon={<GroupIcon  />} {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      </Grid>
    <Box m={2} />
    <Box m={2} />
    <Paper className={classes.tabs} elevation={3} >
        <TabPanel value={value} index={0}>
          <About />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ClubMembers />
        </TabPanel>

                          
    </Paper>          
      <h4>Find Your Limits </h4>
      <h6>Then push past them!</h6>
    </div>
  );
}

