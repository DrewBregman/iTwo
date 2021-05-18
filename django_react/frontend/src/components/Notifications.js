import React from "react";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    flexGrow: 1
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  grid: {
    backgroundColor: "blue"
  },
  paper: {
    padding: theme.spacing(2),
    flexGrow: 1,
    backgroundColor: "white",
    margin: "auto",
    justify: "center",
    alignItems: "center"
  }
}));

//func getUserNoti(id); need to get requesting user id
//from api/profile/ + id + /notifications
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
    )
  }
function Notifications() {
    var randomColor = require('randomcolor'); 
    var color = randomColor();
    var colorIcon = randomColor();
    const members = getMembers(project_id);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const rProf = getProfile(window.REP_LOG_APP_PROPS.rProf);
    const folProf = getProfile(window.REP_LOG_APP_PROPS.folProf);

    return (
            <div >
            <Grid container>
              <Grid item xs={2} lg={3} />
              <Grid item xs={8} lg={6}>
                <Typography align='center' className={classes.Paper} variant = 'h3' color='initial'>
                  Members
                </Typography>
              </Grid>
              <Grid item xs={2} lg={3} />
            </Grid>
           
            <Box m={2} />
            <List className={classes.root} subheader={<li />}>
            <li key={`role-${members.project_id}`} >
                <ul >
                    {members.map((member) => 
                    <div>
                    <Grid container spacing={2}>
                      <Grid item container xs={2} lg={3} />
                        <Paper variant="outlined" color={color} className={classes.paper}>
                          <Grid item className={classes.paper} container xs={12} lg={12}>
                            <Grid className={classes.paper} item xs={2} lg={2}>
                              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </Grid>
                            <Grid item xs={2} lg={1} />
                            <Grid item container xs={4} lg={5}>
                              <Grid item xs={12} lg={12}>
                                {member.user} {bull} {member.title} {/* Seth this is where I need you to go from member>user>profile>profile.name please*/}
                              </Grid>
                              <Grid item xs={12} lg={12}>
                                <Typography color="textSecondary">@andrew.bregman</Typography>
                              </Grid>
                            </Grid>
                            <Grid item xs={2} lg={2} />
                            <Grid item className={classes.paper} xs={2} lg={2}>
                              <Button variant="outlined" color="primary ">
                                Chat
                              </Button>
                            </Grid>
                          </Grid>
                        </Paper>
                        <Grid item container xs={2} lg={3} />
                    </Grid>
                    <Box m={2} />
                    </div>
                )};
                </ul>
            </li>
            </List>
            </div>
    )
}

export default Notifications

/* Let's add a green check mark icon if the milestone model's status object = True, else add a red  "x" icon */


