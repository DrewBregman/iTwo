import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

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
  bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
}));

export default function About(){
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return(
  <Grid container spacing={2}>
  <Grid item xs={6}>
    <Paper className={classes.paper}>
      <Typography align="center" variant="h6">
      Purpose
      </Typography>
      <Typography paragraph variant="body2" component="p">
        <b>Mission:</b> Launch a solid-fueled rocket into low-earth orbit
      </Typography>
      <Typography paragraph variant="body2" component="p">
        <b>Vision:</b> Advance the capabilites of the Army's space sector in warfare
      </Typography>
    </Paper>
  </Grid>

  <Grid item container direction="row" xs={6}>
    <Paper className={classes.paper}>
      <Grid item xs={12}>
        <Typography variant="h6">
          Posted Roles
        </Typography>
      </Grid>

      <Grid item xs={9}>
        <Typography variant="body1" color="textSecondary">
          {bull} This is where the posted role will go 
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body1" color="primary">
          View Role. 
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="body1" color="textSecondary">
          {bull} This is where the posted role will go 
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body1" color="primary">
          View Role. 
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="body1" color="textSecondary">
          {bull} This is where the posted role will go 
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body1" color="primary">
          View Role. 
        </Typography>
      </Grid>
    </Paper>
  
  </Grid>

  <Grid item container xs={12}>
    <Paper className={classes.paper}>
      <Grid item xs={12}>
        <Typography variant="h6">
          Commmitment Level
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          SPEAR Rocketry team says that members should work for a minimum of
          four hours per week for at least a semester in order to be successful.
        </Typography>
      </Grid>
    </Paper>
  </Grid>
</Grid>

  );
}
