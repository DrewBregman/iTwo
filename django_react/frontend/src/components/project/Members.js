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
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";


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
  
function getMembers(project_id){
    const [members, setMembers] = useState([])
  
    useEffect(() => {
        const str = "/api/project/" + project_id + '/members'
        axios.get(str)
            .then(res =>{
                console.log(res)
                setMembers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
                    members
    )
  }

function ViewButton() {
  return (
    <div>
      <Button variant="contained" color="primary ">
        View Profile
      </Button>
    </div>
  )
}

function Members() {
    var randomColor = require('randomcolor'); 
    var color = randomColor();
    var colorIcon = randomColor();
    const members = getMembers(project_id);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

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
                      <Box mx={45} my={2}>
                        <Paper elevation={3} variant="outlined" color={color} className={classes.paper}>
                          <Grid item className={classes.paper} container xs={12} lg={12}>
                            <Grid className={classes.paper} item xs={2} lg={2}>
                              <Avatar alt="Remy Sharp" src={member.image} />
                            </Grid>
                            <Grid item xs={2} lg={1} />
                            <Grid item container xs={4} xl={5}>
                              <Grid item xs={12} lg={12}>
                                {member.firstName} {member.lastName} {bull} {member.Major} {/* Seth this is where I need you to go from member>user>profile>profile.name please*/}
                              </Grid>
                              <Grid item xs={12} lg={12}>
                                <Typography color="textSecondary">West Point {member.gradYear}</Typography>
                              </Grid>
                            </Grid>
                              <Grid item container justify='flex-end' xs={4} lg={4}>
                              <Box mx={2}>
                                <Grid item xs={12} xl={12}>
                                  <Link color='inherit' to={`/p/${member.id}`}><ViewButton /></Link>       
                                </Grid>
                                <Box m={1} />
                                <Grid item xs={12} xl={12}>
                                  <Button variant="outlined" color="primary ">
                                  <Link color='inherit' to='/p/self/1'>Chat</Link> 
                                  </Button>
                                </Grid>
                                </Box>
                              </Grid>
                            
                            
                          </Grid>
                        </Paper>
                        </Box>
                    </Grid>
                    </div>
                )};
                </ul>
            </li>
            </List>
            </div>
    )
}

export default Members

/* Let's add a green check mark icon if the milestone model's status object = True, else add a red  "x" icon */


