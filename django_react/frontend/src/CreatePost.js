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
    <div>
      <Grid item xs={10} xl={11}>
        <Typography variant="h5" align="left">
          Post Something
        </Typography>
      </Grid>
      <Grid item xs={2} xl={1} align="right">
        <CloseIcon />
      </Grid>
    </div>
  );
}

function Below() {
  return (
    <div>
      <Grid item xs={2} xl={2}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Grid>
      <Grid item xs={10} xl={10} alignContent="left">
        Name
      </Grid>
    </div>
  );
}
export default function CreatePost() {
  /*const p = getProfile(window.REP_LOG_APP_PROPS.user_id) */
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <Box p={2} m={2}>
        <Paper>
          <Grid container spacing={2}>
            <Top />
            <Divider variant="middle" />
            <Below />
            <Grid item xs={12} xl={12}>
              <form className={classes.form} noValidate autoComplete="off">
                <TextField
                  id="outlined-secondary"
                  label="Post Something Inspiring"
                  variant="outlined"
                  color="secondary"
                  size="large"
                />
              </form>
            </Grid>
            <Grid item container xs={12} xl={12}>
              <Grid item container xs={8} xl={8}>
                <Grid item xs={2} xl={2} alignContent="center">
                  <ImageIcon />
                </Grid>
                <Grid item xs={2} xl={2} alignContent="center">
                  <VideocamIcon />
                </Grid>
                <Grid item xs={2} xl={2} alignContent="center">
                  <LinkIcon />
                </Grid>
                <Grid item xs={2} xl={2} alignContent="center">
                  <DescriptionIcon />
                </Grid>
              </Grid>
              <Grid item xs={3} xl={3} align="right">
                <Typography>
                  Post <SendIcon />
                </Typography>
              </Grid>
              <Grid item xs={1} xl={1} />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}
