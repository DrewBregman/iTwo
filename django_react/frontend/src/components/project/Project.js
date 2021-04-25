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

export default function Project() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
    <Paper className={classes.paper} elevation={3}>
    <Grid container spacing={3}>

      <Grid item xs={4}>
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
      <Grid item container xs={8}>
        <Grid item xs={12}>
          Name
        </Grid> 
        <Grid item xs={12}>
          Description
        </Grid>  
        <Grid item xs={12}>
          Number Members
        </Grid>
        <Grid item xs={12}>
          Date Founded
        </Grid>     
        <Grid item xs={12}>
          Departments
        </Grid>                              
      </Grid>
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
            <Tab label="Home" icon={<HomeIcon />} {...a11yProps(0)} />
            <Tab label="Posts" icon={<PostAddIcon  />} {...a11yProps(1)} />
            <Tab label="About" icon={<InfoIcon />} {...a11yProps(2)} />
            <Tab label="Milestones" icon={<TimelineIcon />} {...a11yProps(3)} />
            <Tab label="Members" icon={<GroupIcon />} {...a11yProps(4)} />
          </Tabs>
        </AppBar>
      </Grid>
    </Grid>
    </Paper>         

    <Box m={2} />
    <Paper className={classes.paper} elevation={3} >
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
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
                          
    </Paper>          
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

