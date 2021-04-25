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
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import RateReviewIcon from '@material-ui/icons/RateReview';
import axios from 'axios';



export default function Project() {
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

    return (
      <div className={classes.root}>
        <Grid container 
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <div className={classes.projectImage}>
              <label htmlFor="contained-button-file">
                  <IconButton>
                      <Avatar 
                          src="https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9ja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 
                          style={{
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
                {company} / {year}
              </div>
              <div className={classes.major}>
                  {major}
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
                  name='Mahatma Gandhi'
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
        <div className="postsProfile">
          <TabPanel value={value} index={2}>
            <PostsProfile />
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
  
  