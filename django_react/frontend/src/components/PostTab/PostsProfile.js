import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
/*import "../css/ProfileOne.css";*/
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import Friends from "./Friends";
import AreaInterest from "./AreaInterest";

const useStyles = makeStyles({
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
  });

  
export default function PostsProfile() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Grid container spacing={2}>
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
                <Posts />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Posts />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <AreaInterest aOne="Robotics" aTwo="Peaceful Protest" aThree="Legal System"/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Friends />
            </Grid>
        </Grid>
    );
}
