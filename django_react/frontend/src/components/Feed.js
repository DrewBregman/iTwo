import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import IconButton from '@material-ui/core/IconButton';
import InfiniteScroll from 'react-infinite-scroll-component';
import FeedComponent from "./FeedComponent";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      marginTop: 20,
      maxHeight: 200,
      height: 450,
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    post: {
      margin: "auto",
      padding: 10,
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    text:{
      color: theme.palette.text.secondary,
    },
    name: {
      margin: "auto",
      height: 450,
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    divide: {
      textAlign: 'center',
      margin: 'auto',
    },
    profileImg: {
      margin: "0 2px",
      display: "inline-block",
      width: 160,
      height: 160,
      border: 10
    }
  }));
  


export default function Feed() {
    return (
        <div>
            <Grid container>
            <Grid item sm={2} md={3.5} lg={4} xl={4.5}></Grid>
            <Grid item sm={8} md={5} lg={4} xl={3}>
                <FeedComponent />
            </Grid>
            <Grid item sm={2} md={3.5} lg={4} xl={4.5}></Grid>
            </Grid>

        </div>
    )
}

