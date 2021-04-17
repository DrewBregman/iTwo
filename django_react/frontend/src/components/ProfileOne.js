import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
/*import "../css/ProfileOne.css";*/
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Box from '@material-ui/core/Box';



/* This structures and styles everything on the screen */
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
    maxHeight: 300,
    height: 400,
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

export default function ProfileOne({name, major, description, followers, following}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  
  /* EXAMPLE FOR USER DATA FOR IMAGE 
<input
 accept="image/*"
 className={classes.input}
 id="contained-button-file"
 multiple
 type="file"
/>
<label htmlFor="contained-button-file">
  <IconButton>
   <Avatar 
     src="/images/example.jpg" 
     style={{
      margin: "10px",
      width: "60px",
      height: "60px",
     }} 
    />
  </IconButton>
</label>*/
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <label htmlFor="contained-button-file">
                <IconButton>
                    <Avatar 
                        src="https://images.huffingtonpost.com/2016-03-25-1458864692-9841862-MahatmaGandhiALegacyofPeace-thumb.jpg" 
                        style={{
                        margin: "10px",
                        width: "160px",
                        height: "160px",
                        }} 
                        />
                </IconButton>
            </label>
            <div className={classes.profileImg}>
                <h2><b>{name}</b></h2>{bull}{major}
            </div>
            <div className="profile-description">
                {description}
            </div>
            <div className="profile-follow-stats">
                Followers {followers} Following {following}
            </div>
            
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6
            
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}