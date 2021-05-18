import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Box from '@material-ui/core/Box';
import Calendar from 'react-calendar';

function getClub(club_id){
  const [club, setClub] = useState([])

  useEffect(() => {
      const str = "/api/club/" + club_id 
      axios.get(str)
          .then(res =>{
              console.log(res)
              setClub(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  }, [])
  return (
                  club
  )
}


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

  },
  paperRole: {
    padding: theme.spacing(2),
    flexGrow: 1,
    backgroundColor: 'white',


  },
  bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    rootL: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
}));

export default function About(){
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const club = getClub(club_id);

  return(
    <Grid container spacing={2}>
        <Grid item container xs={12} lg={12} xl={12}>
            <Grid item xs={0} lg={2} xl={3}></Grid>
            <Grid item xs={6} lg={4} xl={3}>
            <Typography variant="h6" gutterBottom>
                <b> We normally meet on: </b>
              
            </Typography>
            <Box m={1} />
            <Typography variant="body1" gutterBottom>
                    {club.meet}
                </Typography>
            </Grid>
            <Grid item container xs={6} lg={4} xl={3}>
                <Grid item xs={12} lg={12} xl={12}>
                <Typography variant="h6" gutterBottom>
                    <b>What do We Do When We Meet?</b>
                </Typography>
                </Grid>
                <Grid item xs={12} lg={12} xl={12}>
                <Typography variant="body1" gutterBottom>
                    {club.during}
                </Typography>
                </Grid>
            </Grid>
            <Grid item xs={0} lg={2} xl={3}></Grid>
        </Grid>
        <Box m={2} />
        <Grid item container xs={12} lg={12} xl={12}>
            <Grid item xs={0} lg={2} xl={3}></Grid>
            <Grid item container xs={6} lg={4} xl={3}>
                <Grid item xs={12} lg={12} xl={12}>
                <Typography variant="h6" gutterBottom>
                    <b>Our Next Meeting </b>
                </Typography>
                </Grid>
                <Grid item xs={12} lg={12} xl={12}>
                
                {club.next} 
                </Grid>
            </Grid>
            <Grid item xs={6} lg={4} xl={3}>
                <Typography variant="h6" gutterBottom>
                    Point of Contact: {club.poc}
                    <Box m={1} />
                    <Button variant="contained" color="primary">
                        Contact
                    </Button>
                </Typography>
            </Grid>
            <Grid item xs={0} lg={2} xl={3}></Grid>
        </Grid>
    </Grid>

  );
}
