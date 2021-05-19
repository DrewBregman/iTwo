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
import Avatar from "@material-ui/core/Avatar";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

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
  
function gDC(department_id){
    const [clubs, setClubs] = useState([])
  
    useEffect(() => {
        const str = "/api/department/" + department_id + "/clubs"
        axios.get(str)
            .then(res =>{
                console.log(res)
                setClubs(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
                    clubs
    )
  }


function DepartmentClubs() {
    var randomColor = require('randomcolor'); 
    var color = randomColor();
    var colorIcon = randomColor();
    const clubs = gDC(department_id);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
            <div >
            <Grid container>
              <Grid item xs={2} lg={3} />
              <Grid item xs={8} lg={6}>
                <Typography align='center' className={classes.Paper} variant = 'h3' color='initial'>
                  Clubs
                </Typography>
              </Grid>
              <Box m={2} />
              <Grid item xs={2} lg={3} />
            </Grid>
           
            <Box m={2} />
            <List className={classes.root} subheader={<li />}>
            <li key={`role-${department_id}`} >
                <ul >
                    {clubs.map((club) => 
                    <div>
                        <Card>
                            <CardContent className={classes.tPm}>
                                <Typography variant="h4" className={classes.area}>
                                 Current Club 
                                </Typography>
                                <Avatar alt="Remy Sharp" varient="square" src="../pictures/post_pic/starship.jpg" className={classes.large} />
                                <Typography variant="subtitle" className={classes.num}>
                                57 Members
                                </Typography>
                            </CardContent>
                            <CardContent className={classes.nD}>
                                <Typography variant="h6" className={classes.name}>
                                    {club.id}
                                </Typography>
                                <Typography variant="body1" className={classes.desc}>
                                    this is where the club description will go
                                </Typography>
                            </CardContent>
                        </Card>
                    <Box m={2} />
                    </div>
                )};
                </ul>
            </li>
            </List>
            </div>
    )
}

export default DepartmentClubs
