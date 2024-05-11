/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";

const handler = frames(async () => {
  return {
    image: <div tw="flex">Welcome to Crewcaster</div>,
    buttons: [
      // With query params
      <Button
        action="post"
        target={{ pathname: "/create-fundraise" }}
      >
        Create a Campaign
      </Button>,
      // Without query params
      <Button action="post" target="/approve">
        Fund me
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
