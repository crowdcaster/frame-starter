/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
import { FrameButton } from "frames.js/next/server";
import { error } from "console";

const handler = frames(async (ctx) => {
  if (!ctx.message?.transactionId) {
    return {
      image: "https://placekitten.com/200/300",
      imageOptions: {
        aspectRatio: "1:1",
      },
      buttons: [
        <Button
          action="tx"
          target={`/txdata`} // where to redirect??????
        >
          Donate
        </Button>,
        <Button
          action="link"
          target={`https://www.google.com`} // where to redirect??????
        >
          Report Scam
        </Button>,
      ],
    };
  }

  // If the transactionId is present, we can assume the transaction was successful
  return {
    image: "https://placekitten.com/200/300",
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button
        action="link"
        target={`https://www.google.com`}
      >
        View your donation!
      </Button>,
    ],
  }
});

export const GET = handler;
export const POST = handler;
