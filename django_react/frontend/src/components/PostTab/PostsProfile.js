import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
/*import "../css/ProfileOne.css";*/
import Posts from "./Posts";
import CreatePost from "../MyProfile/CreatePost";
import Friends from "./Friends";
import AreaInterest from "../MyProfile/AreaInterest";
import Post from "../Post";

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
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
  });

  
export default function PostsProfile() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
<div className={classes.root}>
        <Grid container spacing={2}>
            <Grid item container xs={12} lg={12}>
              <Grid item xs={4} lg={4} xl={3}>
                <Post />
              </Grid>
            </Grid>
            <Grid item spacing={2} container xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={3}>
                    <Post />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={3}>
                    <Post />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={3}>
                    <Post />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CreatePost />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CreatePost />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CreatePost />
            </Grid>

            
            <Grid item xs={12} sm={6} md={4}>
                <AreaInterest aOne="Robotics" aTwo="Peaceful Protest" aThree="Legal System"/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                hi
            </Grid>
        </Grid>
        </div>
    );
}
