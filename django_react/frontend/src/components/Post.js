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
  
function getPost(id){
  const [posts, setPosts] = useState([])

  useEffect(() => {
      const str = "/api/post/1"
      axios.get(str)
          .then(res =>{
              console.log(res)
              setPosts(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  }, [])
  return posts
}



function Post() {
  const classes = useStyles();
  const post = getPost(1)
  var img = post.image
  const logo1 = '/static/default.jpg'
  if(img != undefined) {
    var logo2 = '/static' + img.replace('/post_pics','');
  }
  if(img != undefined) {
    var logo = logo2;
  }
  
  else{
    var logo = logo1;
  }
  
  return (
    <Grid container spacing={2}>
      <Grid className={classes.post} item container xs={12} md={12} lg={12}>
        <Paper elevation={3}>
          <Box p={1}>
            <Grid item container xs={12} lg={12}>
              <Grid item xs={2} lg={2} xl={2}>
                <IconButton aria-label="avatar">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </IconButton>
              </Grid>
              <Grid item xs={8} lg={8} xl={8}> 
                <Grid className={classes.divide} item xs={8} lg={8}>
                  {post.sourceID}
                </Grid>
                <Grid item xs={4} lg={4} xl={4}></Grid>
              </Grid>
              <Grid item xs={2} lg={2} xl={2}>
                <IconButton aria-label="like">
                  <MoreHorizIcon /> 
                </IconButton>
              </Grid>
            </Grid>
            <Box m={2} />
            <Grid item container xs={12} lg={12} xl={12}>
              <Grid item xs={12} lg={12} xl={12}>
                <Typography variant="h6">
                  HELLO
                  {post.title}
                </Typography>
              </Grid>
            </Grid>
            <Box m={2} />
            <Grid item container xs={12} lg={12} xl={12}>
              <Grid item xs={12} xl={12}>
                {post.body}
              </Grid>
              <Box m={2} />
            </Grid>
            <Grid item container xs={12} lg={12} xl={12}>
              <Grid item container xs={12} xl={12}>
                <Grid item xs={4} lg={4} xl={4}>
                <IconButton aria-label="like">
                  <ThumbUpAltIcon fontSize="small"  /> 
                </IconButton>
                  48
                </Grid>
                <Grid item xs={4} lg={4} xl={4}></Grid>
                <Grid item xs={4} lg={4} xl={4}>
                 42 Comments
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={12} lg={12} xl={12}>
              <Grid className={classes.divide} item xs={12} lg={12} xl={12}>
                <Divider variant="middle" />
              </Grid>
            </Grid>
            <Box m={2} />
            <Grid item container xs={12} lg={12} xl={12}>
              <Grid item xs={3} lg={3} xl={3}>
                <Grid item xs={6} lg={6} xl={6}></Grid>
                <Grid item xs={6} lg={6} xl={6}>
                <IconButton aria-label="like">
                  <ThumbUpAltOutlinedIcon /> 
                </IconButton>
                Like
                </Grid>
              </Grid>
              <Grid item xs={3} lg={3} xl={3}>
                <Grid item xs={6} lg={6} xl={6}>
                <IconButton aria-label="Share">
                  <ShareOutlinedIcon /> 
                </IconButton>
                Share
              </Grid>
                <Grid item xs={6} lg={6} xl={6}></Grid>
              </Grid>
              <Grid item xs={3} lg={3} xl={3}>
                <Grid item xs={6} lg={6}>
                <IconButton aria-label="Comment">
                  <MessageOutlinedIcon /> 
                </IconButton>
                Comment
                </Grid>
                <Grid item xs={6} lg={6} xl={6}></Grid>
              </Grid>
              <Grid item xs={2} lg={2} xl={2}>
              <IconButton aria-label="send">
                <SendOutlinedIcon /> 
              </IconButton>
              Send
              </Grid>
            </Grid>
            <Grid item container xs={12} lg={12} xl={12}></Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Post;


/* I think that the problem here stems from the fact that javascript does not know wehre 
to find the post ID of the view being rendered. We will have to consider implementing
this logic, without isolating it to the url */