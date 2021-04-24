import React, { useCallback } from "react";
import FriendsDB from "./FriendsDB";
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import {
  MotionScene,
  MotionScreen,
  SharedElement,
  useMotion
} from "react-motion-layout";

function ItemComponent({ item, id }) {
  const history = useHistory();
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
      <div className="mt-1">
        <SharedElement.Div
          animationKey="main-box"
          className={`flex p-4 bg-white cursor-pointer hover:bg-gray-100 rounded-md`}
        >
          <img alt="" className="w-16 h-16 rounded-full" src={item.avatar} />
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
      </CardContent>
    </Card>
    
  );
}
