import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
/*import "../css/ProfileOne.css";*/
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import RateReviewIcon from '@material-ui/icons/RateReview';

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
  rootPost: {
    maxWidth: 345,
  },
  mediaPost: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatarPost: {
    backgroundColor: red[500],
  },
  homeView: {
      margin: 'auto',
  }
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
                    <Tab label="Home" icon={<HomeIcon />} {...a11yProps(0)} />
                    <Tab label="About" icon={<InfoIcon />} {...a11yProps(1)} />
                    <Tab label="Posts" icon={<BlurOnIcon />} {...a11yProps(2)} />
                    <Tab label="Projects" icon={<AccountTreeIcon />} {...a11yProps(3)} />
                    <Tab label="Reviews" icon={<RateReviewIcon />} {...a11yProps(4)} />
                    </Tabs>

                </AppBar>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
        <Grid item xs={6}>
            <div className={classes.homeView}>
                <TabPanel value={value} index={0}>
                    <Post />
                </TabPanel>
            </div>
            <TabPanel value={value} index={1}>
                This is where the about page will go 
            </TabPanel>
            <TabPanel value={value} index={2}>
                This is where user's posts will go
            </TabPanel>
            <TabPanel value={value} index={3}>
                This is where user's projects will go 
            </TabPanel>
            <TabPanel value={value} index={4}>
                This is where the user's reviews will go
            </TabPanel>
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
function Post() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card className={classes.rootPost}>
        <CardHeader
          avatarPost={
            <Avatar aria-label="recipe" className={classes.avatarPost}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="SpaceX Launches Starship"
          subheader="March 30, 2021"
        />
        <CardMedia
          className={classes.mediaPost}
          image="pictures/starship.jpg"
          title="SpaceX Launches Starship"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Starship will enter Mars’ atmosphere at 7.5 kilometers per second and decelerate aerodynamically. 
            The vehicle’s heat shield is designed to withstand multiple entries.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              SpaceX's SN10 Starship prototype lands after epic test launch
              --but then explodes after landing. 
            </Typography>
            <Typography paragraph>
              NASA said on Friday it has awarded billionaire entrepreneur 
              Elon Musk's private space company SpaceX a $2.9 billion 
              contract to build a spacecraft to bring astronauts to 
              the moon as early as 2024, picking it over Jeff Bezos' 
              Blue Origin and defense contractor Dynetics.
            </Typography>
            <Typography paragraph>
            On May 30, 2020, SpaceX made history when it returned human 
            spaceflight capabilities to the United States. SpaceX launched 
            the first pair of NASA astronauts to the International Space 
            Station (ISS) under the agency’s Commercial Crew Program, 
            which aims to perform frequent crewed flights to space from 
            American soil.
            </Typography>
            <Typography>
              Together the Starship spacecraft and Super Heavy rocket create 
              a reusable transportation system capable of on orbit refueling and leveraging Mars’ 
              natural H2O and CO2 resources to refuel on the surface of Mars.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );

}