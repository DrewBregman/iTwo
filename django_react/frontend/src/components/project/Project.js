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
import Milestones from "./Milestones";
import Members from "./Members";
import { useState, useEffect } from "react";
import axios from "axios";
import BookIcon from '@material-ui/icons/Book';
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
    },
    tab: {
      flexGrow: 1,
      backgroundColor: 'white',
      alignItems: 'center',
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

function getProject(project_id){
  const [projects, setProjects] = useState([])

  useEffect(() => {
      const str = "/api/project/" + project_id 
      axios.get(str)
          .then(res =>{
              console.log(res)
              setProjects(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  }, [])


    
  return (
                  projects
  )
}


export default function Project() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const project = getProject(project_id);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
    <Paper className={classes.paper} elevation={3}>
    <Grid container spacing={3}>
    <Box my={1} mx={1} />
      <Grid item xs={4} lg={2} xl={1.5}>
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
      <Grid item container xs={6} lg={8}>
        <Grid item container xs={8} lg={10}>
          <Grid item xs={4} xl={2}>
            <Typography variant="h6">
              <b>{project.name}</b>
            </Typography>
          </Grid> 
          <Grid item xs={4} xl={8}>
          </Grid>
          <Grid item xs={4}  xl={2}>
          <Button variant="contained" color="primary">
            View Roles
          </Button>
          </Grid>

          <Grid item xs={8} lg={8} xl={5}>
          <Typography variant="h6">
            {project.department} Department
            </Typography>
          </Grid> 
          <Grid item xs={0} lg={0} xl={5}>
          </Grid>
          <Grid item xs={4}  lg={2} xl={2}>
          <Box mt={1} />
          <Button variant="outlined" color="primary">
            Contact
          </Button>
          </Grid>
        </Grid>
        <Box m={2} />
        <Grid item xs={12}>
          <Typography variant="body1">
           {project.description}
          </Typography>
        </Grid>  
        <Box m={2} />
        <Grid item container xs={12} xl={12}>
          <Grid item xs={4} lg={4} xl={4}>
            <Grid item xs={12} xl={12}>
              <Typography>
                  <b>65</b>         
              </Typography>
            </Grid>
            <Grid item xs={12} xl={12}>
              <Typography variant="caption" gutterBottom>
                  Members          
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} lg={4} xl={4}>
            <Grid item xs={12} xl={12}>
                <Typography>
                    <b>324</b>         
                </Typography>
              </Grid>
              <Grid item xs={12} xl={12}>
                <Typography variant="caption" gutterBottom>
                    Posts          
                </Typography>
              </Grid>
          </Grid>
          <Grid item xs={4} lg={4} xl={4}>
            <Typography>
              Estimated {project.dateFounded}
            </Typography>
          </Grid>     
        </Grid>
        
                                    
      </Grid>

    </Grid>
    </Paper>         
     <Grid className={classes.tab} item xs={12}>
        <AppBar position="center" color="white">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Home" icon={<HomeIcon />} {...a11yProps(0)} />
            <Tab label="Posts" icon={<BookIcon  />} {...a11yProps(1)} />
            <Tab label="About" icon={<InfoIcon />} {...a11yProps(2)} />
            <Tab label="Milestones" icon={<TimelineIcon />} {...a11yProps(3)} />
            <Tab label="Members" icon={<GroupIcon />} {...a11yProps(4)} />
          </Tabs>
        </AppBar>
      </Grid>
      <Box m={5} />
      <Box mx={4}>
    <Paper className={classes.tab} elevation={3} >
       <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          <About />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Milestones />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Members />
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
                          
    </Paper>       
    </Box>   
    <Box m={3} />
    <Grid container >
      <Grid item xs={10} lg={10} xl={10} />
      <Grid item xs={2} xl={2}>
      <Typography alignItems='center'>
        The Candle
      </Typography>     
      </Grid>
      
    </Grid>
               
    </div>
  );
}

