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
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';

function dataProfile(){
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
      axios.get("api/profiles/")
          .then(res =>{
              console.log(res)
              setProfiles(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  }, [])
  return (
      <div>
              {
                  profiles.map(profile => <li key={lead.id}>{lead.name} says {lead.message}</li>)
              }
      </div>
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

export default function ProfileOne(description, followers, following) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [value, setValue] = React.useState(0);
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
/* THIS GETS MY DATA FROM MODELS */
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
      axios.get("api/profiles/")
          .then(res =>{
              console.log(res)
              setProfiles(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  }, [])
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
                <h2><b>{profiles.name}</b>{bull}{profiles.major}</h2>
            </div>
            <div className="profile-description">
                {description}
            </div>
            <div className="profile-follow-stats">
                <h3><b>Followers {followers} {bull} Following {following}</b></h3>
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
                major='Law'
                day='Saturday Afternoons'
                experienceOne='Leader of non-violent independence movement against British rule'
                experienceTwo='Organized boycotts against British institutions in peaceful forms of civil disobedience'
                experienceThree='Formed Natal Indian Congress in 1894 to fight discrimination'
                experienceFour='Graduated from University Collenge London with a Law Degree in 3 years'
                experienceFive='Led Satyagraha Campaign that Achievfed 1914 Indian Relief Act'
                skillOne='Public Speaking'
                skillTwo='Tolerance'
                skillThree='Forgiveness'
                skillFour='Leadership'
                skillFive='Non-Violent Protests'
                name={profiles.name}
                goalOne='Faculty Oversight When I Save World'
                goalTwo='Rhodes Scholarship'
                goalThree='Publish a paper'
                goalOneDesc='I want a faculty mentorship over the course of my four years'
                goalTwoDesc='With a 6.0GPA, I want to receive the Rhodes Scholarship'
                goalThreeDesc='I would like to conduct research that I can publish a paper from'
                meetMe="Hello. I am Ghandi. I like to organize non-violent protests to achieve peace in the world. Join us on our journey."
                lookFor="currently looking for research faculty mentorship, motivated cadets who want to peacefully protest climate change, and anyone who has experience with coordinating large events"
              />
            </TabPanel>
        </Grid>
      </div>
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
                experienceFive, name, meetMe, lookFor
              }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [dense, setDense] = React.useState(false);


  return (
    <div className={classes.rootGoals}>
      <Grid container spacing={3}>
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
                          primary={profiles.goalOne}
                          secondary={profiles.goalOneDesc}
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
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.rootGoals}>
            <b><u>Looking For</u></b>
            <Typography gutterBottom color="textSecondary" variant="body1">
                {name} is {lookFor}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.about}><b>{name}</b> is Usually Free On {day}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}