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
      maxHeight: 200,
      padding: 10,
      height: 450,
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    text:{
      color: theme.palette.text.secondary,
    },
    name: {
      margin: "auto",
      maxHeight: 200,
      height: 450,
      textAlign: "left",
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
  
/*function getPost(id){
  const [posts, setPosts] = useState([])

  useEffect(() => {
      const str = "/api/post/" + id
      axios.get(str)
          .then(res =>{
              console.log(res)
              setProfiles(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  }, [])
  return (posts)
}

const post = getPost(window.REP_LOG_APP_PROPS.post_id)
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
*/

function Post() {
    const classes = useStyles();
  
    return (
  
      <Grid container spacing={2}>
          <Grid className={classes.post} item container xs={12} md={12} lg={12}>
          <Paper elevation={3}>
          <Box p={1}>
            <Grid item container xs={12} lg={12}>
              <Grid item xs={2} lg={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Grid>
              <Grid item xs={8} lg={8}>
                <Grid className={classes.divide} item xs={8} lg={8}>
                  Andrew Bregman
                </Grid>
                <Grid item xs={4} lg={4}>
                </Grid>
              </Grid>
              <Grid item xs={2} lg={2}>
                <MoreHorizIcon />
              </Grid>
            </Grid>
            <Box m={2} />
            <Grid item container xs={12} lg={12}>
              <Grid item  xs={12} lg={12}>
                <Typography variant='h6'>
                This is the title of the post
                </Typography>
              </Grid>
            </Grid>
            <Box m={2} />
            <Grid item container xs={12} lg={12}>
              <Grid item xs={12}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
             </Grid>
             <Box m={2} />
            </Grid>
            <Grid item container xs={12} lg={12}>
              <Grid item container xs={12}>
              <Grid item xs={4} lg={4}>
                <ThumbUpAltIcon fontSize="small" /> 42
              </Grid>
              <Grid item xs={4} lg={4}></Grid>
              <Grid item xs={4} lg={4}>
                42 Comments
              </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={12} lg={12}>
              <Grid className={classes.divide} item xs={12} lg={12}>
               <Divider variant="middle" />
              </Grid>
            </Grid>
            <Box m={2} />
            <Grid item container xs={12} lg={12}>
              <Grid item xs={3} lg={3}>
               <Grid item xs={6} lg={6}>
                </Grid>
                <Grid item xs={6} lg={6}>
                  <ThumbUpAltOutlinedIcon /> Like
                </Grid>
              </Grid>
              <Grid item xs={3} lg={3}>
               <Grid item xs={6} lg={6}>
                <ShareOutlinedIcon /> Share
                </Grid>
                <Grid item xs={6} lg={6}>
                </Grid>
              </Grid>
              <Grid item xs={3} lg={3}>
               <Grid item xs={6} lg={6}>
                <MessageOutlinedIcon /> Message
                </Grid>
                <Grid item xs={6} lg={6}>
                </Grid>
              </Grid>
              <Grid item xs={2} lg={2}>
               <SendOutlinedIcon /> Send
              </Grid>
            </Grid>
            <Grid item container xs={12} lg={12}>
            </Grid>
            </Box>
            </Paper>
          </Grid>
      </Grid>
    );
  }
  
  export default Post;
  