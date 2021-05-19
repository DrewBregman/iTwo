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
import Members from "./Members";
import { useState, useEffect } from "react";
import axios from "axios";
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import BookIcon from '@material-ui/icons/Book';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import Projects from './Projects';
import Clubs from './Clubs';
import PostTab from './PostTab';
import Button from '@material-ui/core/Button';

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

function getD(department_id){
  const [depart, setDepart] = useState([])

  useEffect(() => {
      const str = "/api/department/" + department_id 
      axios.get(str)
          .then(res =>{
              console.log(res)
              setDepart(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  }, [])


    
  return (
                  depart
  )
}


export default function Department() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const z = getD(department_id);
  const d = getD(window.REP_LOG_APP_PROPS.department_id)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
    <Paper className={classes.paper} elevation={3}>
    <Grid container spacing={3}>
    <Grid item container xs={12} xl={12}>
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
        <Grid item container xs={5.5} lg={5.5} xl={5.5}>

          <Grid item xs={10} lg={10} xl={10}>
            <Typography variant="h6" gutterBottom>
              <b>{d.name}</b>
            </Typography>
          </Grid> 
          <Grid item xs={2} xl={2}>
            <Button variant="outlined" color="primary">
              Join
            </Button>
            </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              {d.mission}
            </Typography>
          </Grid>  
 
        </Grid>

        <Grid item xs={0} lg={1} xl={1}></Grid>
 
        <Grid item alignContent='center' container xs={5.5} lg={5.5} xl={5.5}>

            <Grid item xs={10} xl={10}>
              <Typography variant="body1" gutterBottom>
                Department Head: {d.departmentHead}
              </Typography>
            </Grid>
            
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Deputy Department Head: {d.deputyHead}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Number of Members: 3 Million NONCHANGING
              </Typography>
            </Grid>

          </Grid>
     
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
            <Tab label="Projects" icon={<AccountTreeIcon />} {...a11yProps(0)} />
            <Tab label="Posts" icon={<BookIcon  />} {...a11yProps(1)} />
            <Tab label="Clubs" icon={<DeviceHubIcon />} {...a11yProps(2)} />
            <Tab label="Members" icon={<GroupIcon />} {...a11yProps(3)} />

          </Tabs>
        </AppBar>
      </Grid>
      
    <Box m={4} />
    <Box mx={5} >
    <Paper className={classes.paper} elevation={3} >
       <TabPanel value={value} index={0}>
          <Projects />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PostTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Clubs />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Members />
        </TabPanel>
    
                          
    </Paper>   
    </Box>       
      <h1>Find Your Limits </h1>
      <h2>Then push past them!</h2>
    </div>
  );
}

