import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
/*import "../css/ProfileOne.css";*/
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
/*import EditButton from './EditProfile';*/

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
    about: {
      padding: theme.spacing(2),
      textAlign: 'center',
      margin: 'auto',
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

  function generate(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

export default function About() {
const classes = useStyles();
const bull = <span className={classes.bullet}>•</span>;
const [dense, setDense] = React.useState(false);
const p = getProfile(window.REP_LOG_APP_PROPS.user_id)

return (
        <Grid container spacing={2}>
            <Grid item container xs={12} xl={12}>
                <Grid item container xs={7} lg={7}>
                    <Grid item xs={12} xl={12}>
                        <Paper >
                            <Typography align="center" variant="h6">
                            Meet Me
                            </Typography>
                            <Typography paragraph variant="body2" component="p">
                                {p.meetMe}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={8} xl={8}>
                            <Paper >
                            <Typography>
                                <Typography align='center' variant="h6" >
                                    Research Goals
                                </Typography>
                                <List dense={dense}>
                                    {generate(
                                    <ListItem>
                                        <ListItemText
                                        primary={p.goalOne}
                                        secondary={p.goalOneDesc}
                                        />
                                    </ListItem>,
                                    )}
                                    {generate(
                                    <ListItem>
                                        <ListItemText
                                        primary={p.goalTwo}
                                        secondary={p.goalTwoDesc}
                                        />
                                    </ListItem>,
                                    )}
                                    {generate(
                                    <ListItem>
                                        <ListItemText
                                        primary={p.goalThree}
                                        secondary={p.goalThreeDesc}
                                        />
                                    </ListItem>,
                                    )}
                                </List>
                            </Typography>
                            </Paper>
                        </Grid>
   
                        <Grid item container xs={4} xl={4}>
                        <Box mx={4}>
                            <Grid item xs={12} xl={12}>
                                <Paper className={classes.about}>
                                    <Typography align="center" variant="h6">
                                    Academic Desire
                                    </Typography>
                                    <Typography >
                                        {p.firstName} is {p.lookingFor}
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Box my={2}></Box>
                            <Grid item xs={12} xl={12}>
                                <Paper className={classes.about}>
                                    <Typography>
                                    <b>{p.firstName}</b> is Usually Free On {p.day}
                                    </Typography>
                                </Paper>
                            </Grid>
                            </Box>
                        </Grid>
          
                </Grid>
                <Grid item container xs={5} xl={5}>
                    <Box mx={4}>
                    <Grid item xs={12} xl={12}>
                    <Paper>
                        <Typography align='center' gutterBottom variant="h6">
                            Experience
                        </Typography>
                        <Typography color="text-secondary" gutterBottom variant="body1">
                            {p.major} 
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            <div className={classes.list}>
                                <ul>
                                    <Box mx={1}>
                                <li>{bull}{p.experienceOne}</li>
                                <li>{bull}{p.experienceTwo}</li>
                                <li>{bull}{p.experienceThree}</li>
                                <li>{bull}{p.experienceFour}</li>
                                <li>{bull}{p.experienceFive}</li>
                                </Box>
                                </ul>
                            </div>
                            </Typography>
                            <Divider variant="middle" />
                            <div className={classes.section2Experience}>
                            <Typography gutterBottom variant="body1">
                                Skills
                            </Typography>
                            <div>
                                <Chip className={classes.chipExperience} label={p.skillOne} />
                                <Chip className={classes.chipExperience} color="primary" label={p.skillTwo} />
                                <Chip className={classes.chipExperience} label={p.skillThree} />
                                <Chip className={classes.chipExperience} label={p.skillFour} />
                                <Chip className={classes.chipExperience} label={p.skillFive} />
                            </div>
                            </div>
                            <Button color="primary">Endorse a Skill</Button>
                            </Paper>
                    </Grid>
                    </Box>
            </Grid>
            
            </Grid>

        </Grid>


);
}

