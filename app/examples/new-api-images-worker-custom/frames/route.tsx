/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const handler = frames(async (ctx) => {
  return {
    image: "https://placekitten.com/200/300",
    imageOptions: {
      aspectRatio: '1:1'
    },
    buttons: [
      <Button action="post">Donate</Button>,
      <Button action="post" target="/next">
        Report Scam
      </Button>,
    ],
  };
});


export const GET = handler;
export const POST = handler;
