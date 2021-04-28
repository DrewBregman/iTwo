import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
/*import "../css/ProfileOne.css";*/
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import EditButton from './EditProfile';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PostsProfile from "./PostTab/PostsProfile";
import Posts from "./PostTab/Posts";
import ProjectTab from "./uProjectTab/ProjectTab";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      marginTop: 20,
      maxHeight: 450,
      height: 450,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    
    },
    profileImg: {
        margin: '0 2px',
        display: 'inline-block',
        width: 160,
        height: 160,
        border: 10,
    },
  }));
function getPost(id){
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


function Post() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>

            </Grid>
            <Grid item xs={12}>

            </Grid>
            <Grid item xs={12}> 

            </Grid>
            <Divider variant="middle" />
            <Grid item xs={12}>

            </Grid>
        </Grid>
    )
}

export default Post
