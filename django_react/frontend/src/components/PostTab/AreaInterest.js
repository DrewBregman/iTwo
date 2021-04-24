import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FlareIcon from '@material-ui/icons/Flare';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    titleGoals: {
        margin: theme.spacing(4, 0, 2),
      },
}));

function AreaInterest({aOne, aTwo, aThree}) {
    const classes = useStyles();
    return (
        <div className="roots">
            <Card>
                <CardContent>
                <Typography variant="h6" className={classes.area}>
                  Areas of Interest
                </Typography>
                <ListItem>
                    <FlareIcon />
                    <ListItemText
                        primary={aOne}
                    />
                </ListItem>
                <ListItem>
                    <FlareIcon />
                    <ListItemText
                        primary={aTwo}
                    />
                </ListItem>
                <ListItem>
                    <FlareIcon />
                    <ListItemText
                        primary={aThree}
                    />
                </ListItem>
                </CardContent>
            </Card>
            
        </div>
    )
}

export default AreaInterest
