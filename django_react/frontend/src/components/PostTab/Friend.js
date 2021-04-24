import React from "react";
import { useParams } from "react-router-dom";
import FriendsDB from "./FriendsDB";

import { MotionScene, SharedElement, MotionScreen } from "react-motion-layout";

export default function Messages() {
  const { friendId } = useParams();
  const item = FriendsDB[friendId || 0];

  return (
    <MotionScreen>
      <MotionScene
        easing="cubic-bezier(0.34, 1.56, 0.64, 1)"
        name={`friend-${friendId}`}
      >
        <div className="h-screen bg-gray-300">
          <div className="mt-20 mx-8">
            <SharedElement.Div
              animationKey="main-box"
              style={{ backgrond: `url(${item.avatar})` }}
              className={`flex p-4 z-20 relative bg-white cursor-pointer shadow-md cursor-pointer rounded-md`}
            >
              <img
                alt=""
                className="w-16 h-16 rounded-full"
                src={item.avatar}
              />
              <div className="flex justify-between w-full ml-4 mt-2">
                <div className="flex flex-col">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm font-medium text-gray-500">
                    {item.text}
                  </div>
                </div>
              </div>
            </SharedElement.Div>
          </div>
          <div className="gradient h-32 w-full absolute z-0 top-0" />
        </div>
      </MotionScene>
    </MotionScreen>
  );
}
