import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
/*import "../css/ProfileOne.css";*/
import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),

    }
  }));

  function ViewButton() {
    return (
      <div>
        <Button variant="contained" color="primary ">
          View Project
        </Button>
      </div>
    )
  }
  
  function getProjects(user_id){
    const [projects, setProjects] = useState([])
  
    useEffect(() => {
        const str = "/api/profile/" + user_id + '/projects'
        axios.get(str)
            .then(res =>{
                console.log(res)
                setProjects(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
                    projects
    )
  }
export default function ProjectTab() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    var randomColor = require('randomcolor'); 
    var color = randomColor();
    var colorIcon = randomColor();
    const projects = getProjects(window.REP_LOG_APP_PROPS.user_id);
    return (
        <div >
            <Grid container spacing={2}>
              <Grid item xs={12} xl={12}>
                <Typography align='center' className={classes.Paper} variant = 'h3' color='initial'>
                  Projects
                </Typography>
              </Grid>
            </Grid>
           
            <Box m={2} />
            <List className={classes.root} subheader={<li />}>
            <li key={`role-${projects.project_id}`} >
                <ul >
                    {projects.map((p) => 
                    <div>
                    <Grid container spacing={2}>
                      <Box mx={2} my={2}>
                      <Paper elevation={3} color={color} className={classes.paper}>
                        <Box mx={2} my={4}>
                        <Grid container xs={12} xl={12}>
                        <Grid container xs={12} xl={12}>
                            <Box m={2} />
                        </Grid>
                          <Grid container item xs={3} xl={3}>
                              <Grid item xs={12}>
                                <Avatar alt="Remy Sharp" variant='square' src={p.logo} className={classes.large}/>
                              </Grid>
                              <Grid item xs={12} xl={12}>
                                  <Box m={2} />
                                    <Typography align="center">
                                        Number of Members
                                    </Typography>
                                </Grid>
                          </Grid>
                          <Grid item container xs={9} xl={9}>
                                <Grid item xs={9} xl={9}>
                                  <Typography align='center' variant='h4'>
                                    {p.name} 
                                  </Typography>
                                </Grid>
                              
                              <Box mx={2}>
                                <Grid item xs={3} xl={3}>
                                  <Link color='inherit' to={`/p/${p.id}`}><ViewButton /></Link>       
                                </Grid>
                                </Box>
                                <Grid item xs={9} xl={9}>
                                  <Typography align='left' variant='h5'>
                                    Current Project in the Department of {p.department}
                                  </Typography>
                                </Grid>
                              <Box mx={2}>
                                 <Grid item xs={3} xl={3}>
                                  <Button variant="outlined" color="primary ">
                                  <Link color='inherit' to='/p/self/1'>Currently Recruiting!</Link> 
                                  </Button>
                                </Grid>
                              </Box>
                          </Grid>
                          <Box mx={2} my={2}>
                            <Paper>
                                <Box p={2}>
                                    <Grid item xs={12} xl={12}>
                                        <Box m={2}>
                                        <Typography>
                                            <b>Mission</b>: {p.mission}
                                        </Typography>
                                        <Box m={2} />
                                        <Typography>
                                            <b>Vision</b>: {p.vision}
                                        </Typography>
                                        <Box m={2} />
                                        <Typography>
                                            {p.description}
                                        </Typography>
                                        </Box>
                                    </Grid>
                                </Box>   
                            </Paper>
                          </Box>
                        </Grid>
                       </Box>
                        </Paper>
                        </Box>
                    </Grid>
                    </div>
                )};
                </ul>
            </li>
            </List>
            </div>
    );
}

