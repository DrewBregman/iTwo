import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SpringModal from './RoleModal';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Box from '@material-ui/core/Box';

function getRoles(project_id){
  const [roles, setRoles] = useState([])

  useEffect(() => {
      const str = "/api/project/" + project_id + '/roles'
      axios.get(str)
          .then(res =>{
              console.log(res)
              setRoles(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  }, [])
  return (
                  roles
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
  const roles = getRoles(project_id);

  return(
  <Grid container spacing={2}>
    <Grid item container xs={6} xl={4}>
      <Grid item xs={12} xl={12}>
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
      <Box m={2} />
      <Grid item container xs={12} xl={12}>
        <Paper className={classes.paper}>
          <Grid item xs={12}>
            <Typography variant="h6">
              Commmitment Level
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Typography variant="body1">
              SPEAR Rocketry team says that members should work for a minimum of
              four hours per week for at least a semester in order to be successful.
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>

    <Grid item container xs={6} xl={4}>
      <Paper className={classes.paperRole}>
        <Grid item xs={12}>
          <Typography variant="h6">
            Posted Roles
          </Typography>
        </Grid>
        <Grid item container xs={12} lg={12}>
        <Grid item xs={12} lg={12}>
          <Typography variant="body1" color="textSecondary">
          <List className={classes.rootL} subheader={<li />}>
          <li key={`role-${roles.role_id}`} className={classes.listSection}>
            <ul className={classes.ul}>
                {roles.map((role) => (
                  <Grid container spacing={2}>
                    <Grid item xs={8} lg={6}>
                      <ListItem key={`${role.id} Role`}>
                        <ListItemText primary={`${role.role} Role`} />
                      </ListItem>
                    </Grid>
                    <Grid item xs={4} lg={6}>
                    <SpringModal {...role}/>
                    </Grid>
                  </Grid>
              ))}
            </ul>
          </li>
        </List>
          </Typography>
        </Grid>
        </Grid>
        <Box m={2} />
        <Grid item xs={12} lg={12}>
          <Typography variant="body1" color="textPrimary">
            Click View Role To Apply For Roles!
          </Typography>
        </Grid>
      </Paper>
    </Grid>
</Grid>

  );
}
