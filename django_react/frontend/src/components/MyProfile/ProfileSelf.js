import React, {useState, useEffect} from 'react';
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
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
/*import EditButton from './EditProfile';*/
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PostsProfile from "../PostTab/PostsProfile";
import Posts from "../PostTab/Posts";
import ProjectTab from "../uProjectTab/ProjectTab";
import EditButton from '../EditProfile/EditProf';
import BookIcon from '@material-ui/icons/Book';
import PostTab from './PostTab';

function getProfile(id){
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
      const str = "/api/profiles/" + id
      axios.get(str)
          .then(res =>{
              console.log(res)
              setProfiles(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  }, [])
  return (
                  profiles
                  /*profiles.map(profile => {
                    const {major, day, experienceOne, experienceTwo, experienceThree,
                          experienceFour, experienceFive, skillOne, skillTwo, SkillThree,
                          skillFour, skillFive, name, goalOne, goalTwo, goalThree,
                          goalOneDesc, goalTwoDesc, goalThreeDesc, meetMe, lookFor} = profile;
                    })*/
  )
}

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
  },
  about: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  rootExperience: {
    width: '100%',
    maxWidth: 560,
    backgroundColor: theme.palette.background.paper,
  },
  chipExperience: {
    margin: theme.spacing(0.5),
  },
  section1Experience: {
    margin: theme.spacing(3, 2),
  },
  section2Experience: {
    margin: theme.spacing(2),
  },
  section3Experience: {
    margin: theme.spacing(3, 1, 1),
  },
  list: {
    textAlign: 'left',
  },
  rootGoals: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demoGoals: {
    backgroundColor: theme.palette.background.paper,
  },
  titleGoals: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function ProfileSelf() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [value, setValue] = React.useState(0);
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
/* THIS GETS MY DATA FROM MODELS */
  /*const [profiles, setProfiles] = useState([])

  useEffect(() => {
      axios.get("api/profiles/")
          .then(res =>{
              console.log(res)
              setProfiles(res.data)
          })
          .catch(err => {
              console.log(err4)
          })
  }, [])*/
  const gottenprofile = getProfile(window.REP_LOG_APP_PROPS.user_id)
  var str1 = gottenprofile.firstName
  var str2 = ''
  var str3 = gottenprofile.lastName
  const name = str1 + ' ' + str3
  var img = gottenprofile.image
  const logo1 = '/static/default.jpg'
  if(img != undefined) {
    var logo2 = '/static' + img.replace('/profile_pics','');
  }
  if(img != undefined) {
    var logo = logo2;
  }
  else{
    var logo = logo1;
  }
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
      <Grid container 
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.profileImg}>
            <label htmlFor="contained-button-file">
                <IconButton>
                    <Avatar
                        src={logo}
                        /*src="https://images.huffingtonpost.com/2016-03-25-1458864692-9841862-MahatmaGandhiALegacyofPeace-thumb.jpg"
                        */style={{
                        margin: "10px",
                        width: "160px",
                        height: "160px",
                        }} 
                        />
                </IconButton>
              </label>
              </div>
            <div className={classes.nameHeader}>
                <h2><b>{name}</b></h2>
            </div>
            <div className={classes.compName}>
              {gottenprofile.company} / {gottenprofile.gradYear}
            </div>
            <div className={classes.compName}>
                Major: {gottenprofile.Major}
            </div>
            <div className="profile-follow-stats">
                <h3><b>Followers 20 {bull} Following 30 (need to change this once we get friends running)</b></h3>
            </div>
            <div>
                <EditButton {...gottenprofile}/>
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
                    <Tab label="Posts" icon={<BookIcon />} {...a11yProps(2)} />
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
                    <Posts />
                </TabPanel>
            </div>
            
            <TabPanel value={value} index={4}>
                This is where the user's reviews will go
            </TabPanel>
        </Grid>
      </Grid>
      <div className = {classes.about}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >       
            <TabPanel value={value} index={1}>
              <About 
                major={gottenprofile.major}
                day={gottenprofile.day}
                experienceOne={gottenprofile.experienceOne}
                experienceTwo={gottenprofile.experienceTwo}
                experienceThree={gottenprofile.experienceThree}
                experienceFour={gottenprofile.experienceFour}
                experienceFive={gottenprofile.experienceFive}
                skillOne={gottenprofile.skillOne}
                skillTwo={gottenprofile.skillTwo}
                skillThree={gottenprofile.skillThree}
                skillFour={gottenprofile.skillFour}
                skillFive={gottenprofile.skillFive}
                name={name}
                goalOne={gottenprofile.goalOne}
                goalTwo={gottenprofile.goalTwo}
                goalThree={gottenprofile.goalThree}
                goalOneDesc={gottenprofile.goalOneDesc}
                goalTwoDesc={gottenprofile.goalTwoDesc}
                goalThreeDesc={gottenprofile.goalThreeDesc}
                meetMe={gottenprofile.meetMe}
                lookFor={gottenprofile.lookingFor}
              />
            </TabPanel>
        </Grid>
      </div>
      <div className="postsProfile">
        <TabPanel value={value} index={2}>
          <PostTab />
        </TabPanel>
      </div>
      <div className="projectsProfile">
        <TabPanel value={value} index={3}>
                <ProjectTab />
        </TabPanel>
      </div>
    </div>
  );
                    }



function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

function About({ goalTwo, 
                goalTwoDesc, goalThree, goalThreeDesc, 
                major, day, experienceOne, experienceTwo, 
                experienceThree, skillOne, skillTwo, skillThree, 
                skillFour, skillFive, experienceFour, 
                experienceFive, name, meetMe, lookFor, goalOne, goalOneDesc
              }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [dense, setDense] = React.useState(false);


  return (
    <div className={classes.rootGoals}>
      <Grid container alignItems="baseline" justify="center" spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.about}>
            Meet Me
            <Typography variant="body1" color="textSecondary" className={classes.demoGoals}>
              {meetMe}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
            <Paper className={classes.aboutGoals}>
              <Grid item xs={12}>
                <Typography variant="h6" className={classes.titleGoals}>
                  Research Goals
                </Typography>
                <div className={classes.demoGoals}>
                  <List dense={dense}>
                    {generate(
                      <ListItem>
                        <ListItemText
                          primary={goalOne}
                          secondary={goalOneDesc}
                        />
                      </ListItem>,
                    )}
                    {generate(
                      <ListItem>
                        <ListItemText
                          primary={goalTwo}
                          secondary={goalTwoDesc}
                        />
                      </ListItem>,
                    )}
                    {generate(
                      <ListItem>
                        <ListItemText
                          primary={goalThree}
                          secondary={goalThreeDesc}
                        />
                      </ListItem>,
                    )}
                  </List>
                </div>
              </Grid>
            </Paper>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.rootExperience}>
            <Paper className={classes.aboutExperience}>
            <div className={classes.section1Experience}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h6">
                    Experience
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography color="text-secondary" gutterBottom variant="body1">
                    {major} Major
                  </Typography>
                </Grid>
              </Grid>
              <Typography gutterBottom variant="body2">
              <div className={classes.list}>
                <ul>
                  <li>{bull}{experienceOne}</li>
                  <li>{bull}{experienceTwo}</li>
                  <li>{bull}{experienceThree}</li>
                  <li>{bull}{experienceFour}</li>
                  <li>{bull}{experienceFive}</li>
                </ul>
              </div>
              </Typography>
            </div>
            <Divider variant="middle" />
            <div className={classes.section2Experience}>
              <Typography gutterBottom variant="body1">
                Skills
              </Typography>
              <div>
                <Chip className={classes.chipExperience} label={skillOne} />
                <Chip className={classes.chipExperience} color="primary" label={skillTwo} />
                <Chip className={classes.chipExperience} label={skillThree} />
                <Chip className={classes.chipExperience} label={skillFour} />
                <Chip className={classes.chipExperience} label={skillFive} />
              </div>
            </div>
            <div className={classes.section3Experience}>
              <Button color="primary">Endorse a Skill</Button>
            </div>
          </Paper>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.rootGoals}>
            <b><u>Looking For</u></b>
            <Typography gutterBottom color="textSecondary" variant="body1">
                {name} is {lookFor}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.about}><b>{name}</b> is Usually Free On {day}</Paper>
        </Grid>
        <Grid item xs={4}>
            <EditButton>Hello</EditButton>
        </Grid>
      </Grid>
    </div>

  );
}

