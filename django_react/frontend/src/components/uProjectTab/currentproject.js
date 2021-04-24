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
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
    
}));

function CurrentProject({pname, pdesc}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card>
                <CardContent className={classes.tPm}>
                    <Typography variant="h4" className={classes.area}>
                    Current Project
                    </Typography>
                    <Avatar alt="Remy Sharp" varient="square" src="../pictures/post_pic/starship.jpg" className={classes.large} />
                    <Typography variant="subtitle" className={classes.num}>
                        57 Members
                    </Typography>
                </CardContent>
                <CardContent className={classes.nD}>
                    <Typography variant="h6" className={classes.name}>
                        {pname}
                    </Typography>
                    <Typography variant="body1" className={classes.desc}>
                        {pdesc}
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    )
}

export default CurrentProject
