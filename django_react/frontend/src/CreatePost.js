import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
/*import Link from 'react-router-dom';*/
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Box from "@material-ui/core/Box";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import ImageIcon from "@material-ui/icons/Image";
import VideocamIcon from "@material-ui/icons/Videocam";
import CloseIcon from "@material-ui/icons/Close";
import LinkIcon from "@material-ui/icons/Link";
import DescriptionIcon from "@material-ui/icons/Description";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import SendIcon from "@material-ui/icons/Send";
import IconButton from '@material-ui/core/IconButton';
import {useState, useEffect} from 'react';

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
    minWidth: 275,
    flexGrow: 1,
    maxWidth: 850,
    justify: "center",
    overflow: "auto",
    maxHeight: 600
  },
  paper: {
    padding: theme.spacing(2),
    flexGrow: 1,
    justify: "center",
    alignItems: "flex-start",
    alignContent: "flex-start"
  },
  grid: {
    justify: "center",
    alignItems: "flex-start",
    alignContent: "flex-start"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "75ch",
      height: 1000
    }
  }
}));
function Top() {
  return (
    <>
      <Grid item xs={10} xl={11}>
        <Typography variant="h5" align="left">
          Post Something
        </Typography>
      </Grid>
      <Grid item xs={2} xl={1} align="right">
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Grid>
    </>
  );
}

function Below() {
  const p = getProfile(window.REP_LOG_APP_PROPS.user_id)
  return (
    <>
      <Grid item xs={2} xl={2}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Grid>
      <Grid item xs={8} xl={8} alignContent="center">
        {p.name}
      </Grid>
    </>
  );
}
export default function CreatePost() {
  const p = getProfile(window.REP_LOG_APP_PROPS.user_id)
  /*const p = getProfile(window.REP_LOG_APP_PROPS.user_id) */
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <Box p={2} m={2}>
        <Paper>
          <Grid container spacing={2}>
            <Top />
            <Divider/>
            <Below />
            <Grid item xs={12} xl={12}>
              <Box m={2}>
                <form className={classes.form} noValidate autoComplete="off">
                  <TextField
                    id="outlined-secondary"
                    label="Post Something Inspiring"
                    variant="outlined"
                    color="secondary"
                    size="large"
                  />
                </form>
              </Box>              
            </Grid>
            <Grid item container xs={12} xl={12}>
              <Grid item container xs={8} xl={8}>
                <Grid item xs={2} xl={2} alignContent="center">
                  <IconButton>
                    <ImageIcon />
                  </IconButton>              
                </Grid>
                <Grid item xs={2} xl={2} alignContent="center">
                  <IconButton>
                    <VideocamIcon />
                  </IconButton>              
                </Grid>
                <Grid item xs={2} xl={2} alignContent="center">
                  <IconButton>
                    <LinkIcon />
                  </IconButton>                  
                </Grid>
                <Grid item xs={2} xl={2} alignContent="center">
                  <IconButton>
                    <DescriptionIcon />
                  </IconButton>         
                </Grid>
              </Grid>
              <Grid item xs={3} xl={3} align="right">
                <IconButton>
                  <Typography>
                    Post <SendIcon />
                  </Typography>
                </IconButton>               
              </Grid>
              <Grid item xs={1} xl={1} />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}
