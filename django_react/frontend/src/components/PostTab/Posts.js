import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    tabs: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
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
    rootPost: {
      maxWidth: 345,
    },
    mediaPost: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatarPost: {
      backgroundColor: red[500],
    },
    homeView: {
        margin: 'auto',
    },
}));

export default function Posts() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card className={classes.rootPost}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatarPost} src="/pictures/user_pro_pic/profpic.png">
              
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="SpaceX Launches Starship"
          subheader="March 30, 2021"
        />
        <CardMedia
          className={classes.mediaPost}
          image="pictures/starship.jpg"
          title="SpaceX Launches Starship"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Starship will enter Mars’ atmosphere at 7.5 kilometers per second and decelerate aerodynamically. 
            The vehicle’s heat shield is designed to withstand multiple entries.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="like">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="like">
            <ChatBubbleIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );

}