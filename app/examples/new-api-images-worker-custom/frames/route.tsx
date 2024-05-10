/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
import { FrameButton } from "frames.js/next/server";

const handler = frames(async (ctx) => {
  return {
    image: "https://placekitten.com/200/300",
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <FrameButton
        action="tx"
        target={`https://www.google.com`} // where to redirect??????
      >
        Donate
      </FrameButton>,
      <FrameButton
        action="link"
        target={`https://www.google.com`} // where to redirect??????
      >
        Report Scam
      </FrameButton>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
