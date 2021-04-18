import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
/*import "../css/ProfileOne.css";*/
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

/* This is for the tabs */
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
  

/* This structures and styles everything on the screen */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginTop: 20,
    maxHeight: 450,
    height: 450,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
  },
  profileImg: {
      margin: '0 2px',
      display: 'inline-block',
      width: 160,
      height: 160,
      border: 10,
  },
}));

export default function ProfileOne({name, major, description, followers, following}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [value, setValue] = React.useState(0);
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /* EXAMPLE FOR USER DATA FOR IMAGE 
<input
 accept="image/*"
 className={classes.input}
 id="contained-button-file"
 multiple
 type="file"
/>
<label htmlFor="contained-button-file">
  <IconButton>
   <Avatar 
     src="/images/example.jpg" 
     style={{
      margin: "10px",
      width: "60px",
      height: "60px",
     }} 
    />
  </IconButton>
</label>*/
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <label htmlFor="contained-button-file">
                <IconButton>
                    <Avatar 
                        src="https://images.huffingtonpost.com/2016-03-25-1458864692-9841862-MahatmaGandhiALegacyofPeace-thumb.jpg" 
                        style={{
                        margin: "10px",
                        width: "160px",
                        height: "160px",
                        }} 
                        />
                </IconButton>
            </label>
            <div className={classes.profileImg}>
                <h2><b>{name}</b></h2>{bull}{major}
            </div>
            <div className="profile-description">
                {description}
            </div>
            <div className="profile-follow-stats">
                Followers {followers} Following {following}
            </div>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                    >
                    <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />
                    <Tab label="Item Two" icon={<FavoriteIcon />} {...a11yProps(1)} />
                    <Tab label="Item Three" icon={<PersonPinIcon />} {...a11yProps(2)} />
                    <Tab label="Item Four" icon={<HelpIcon />} {...a11yProps(3)} />
                    <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
                    <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
                    <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} />
                    </Tabs>
                </AppBar>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
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
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
                    }
