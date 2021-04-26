import React, { useCallback } from "react";
import FriendsDB from "./FriendsDB";
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import {
  MotionScene,
  MotionScreen,
  SharedElement,
  useMotion
} from "react-motion-layout";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function ItemComponent({ item, id }) {
  const history = useHistory();
  const classes = useStyles();
  const withTransition = useMotion(`friend-${id}`);
  const callback = useCallback(() => history.push(`/friend/${id}`), [
    history,
    id
  ]);

  return (

    <MotionScene
      easing="cubic-bezier(0.34, 1.56, 0.64, 1)"
      name={`friend-${id}`}
      onClick={withTransition(callback)}
    >
      <div className={classes.root}>
      <div className="mt-1">
        <SharedElement.Div
          animationKey="main-box"
          className={`flex p-4 bg-white cursor-pointer hover:bg-gray-100 rounded-md`}
        >
          <Avatar alt="" className={classes.large} variant="square" src={item.avatar} />
          <div className="flex justify-between w-full ml-4 mt-2">
            <div className="flex flex-col">
              <div className={`font-semibold`}>{item.name}</div>
              <div className="text-sm font-medium text-gray-500">
                {item.text}
              </div>
            </div>
          </div>
        </SharedElement.Div>
      </div>
      </div>
    </MotionScene>
  );
}

export default function Friends() {
  return (
    <Card>
      <CardContent>
        <MotionScreen>
          <div className="pt-4 bg-white min-h-screen">
            <h1 className="p-4 text-3xl font-bold">Friends</h1>
            {FriendsDB.map((item, id) => (
              <ItemComponent item={item} id={id} key={id} />
            ))}
          </div>
        </MotionScreen>
        <MotionScreen>
          <div className="pt-4 bg-white min-h-screen">
            <h1 className="p-4 text-3xl font-bold">Friends</h1>
            {FriendsDB.map((item, id) => (
              <ItemComponent item={item} id={id} key={id} />
            ))}
          </div>
        </MotionScreen>
      </CardContent>
    </Card>
    
  );
}
