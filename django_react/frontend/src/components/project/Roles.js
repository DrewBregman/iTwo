import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
/*import Link from 'react-router-dom';*/
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Box from "@material-ui/core/Box";
import ApplicationModal from "./Apply/ApplyModal";



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    flexGrow: 1,
    maxWidth: 850,
    justify: "center",
    overflow: 'auto',
    maxHeight: 600,
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
}));
export default function Role({...role}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className={classes.root}>
      <Paper >
        <Grid container spacing={2}>
          <Grid item xs={12} xl={12}>
            <Typography variant="h3">Project Name</Typography>
          </Grid>
          <Grid item container>
            <Grid item xs={6} lg={4}>
              <Typography color="textSecondary" variant="h5">
                {role.role}
              </Typography>
            </Grid>
            <Grid item xs={6} lg={4}>
              <Typography color="textPrimary" variant="h5">
                Project Department(s)
              </Typography>
            </Grid>
            <Grid item xs={0} lg={4} />
          </Grid>
          <Grid item container>
            <Grid item xs={3} lg={1}>
              <ApplicationModal />
            </Grid>
            <Grid item xs={3} lg={1}>
              <Button color="primary">
                {" "}
                <FavoriteIcon />{" "}
              </Button>
            </Grid>
            <Grid item xs={6} lg={6} />
          </Grid>
        </Grid>
      </Paper>
      <Box m={2} />
      <Grid  justify="center" container spacing={2}>
        <Grid item xs={6} lg={4}>
          <Paper>
            <Grid item xs={12} lg={12}>
              <Typography variant="h6">
                <b>Role Description</b>
              </Typography>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography variant="body2">
                {role.description}
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={6} lg={4}>
              <Typography variant="h6">Schedule</Typography>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography variant="body2">{bull} {role.hoursWeek}</Typography>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography variant="body2">{bull} {role.daysWeek}</Typography>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography variant="body2">
                {bull} {role.semester}
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={6} lg={4}>
              <Typography variant="h6">Point of Contact</Typography>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography color="textSecondary" variant="body2">
                {role.contact}: PARCE AND INCLUDE CONTACT'S EMAIL ADDRESS
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4} lg={4}>
          <Paper>
            <Grid item xs={12} lg={12}>
              <Typography variant="h6">Basic Qualifications</Typography>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography variant="body2">
                {role.qualifications}
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={12} lg={12}>
              <Typography variant="h6">Nice To Have</Typography>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography variant="body2">
                {role.niceToHave} 
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={12} lg={12}>
              <Typography variant="h6">Ideal For:</Typography>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography variant="body2">
                {role.idealFor}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
