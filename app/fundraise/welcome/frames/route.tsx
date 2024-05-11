/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";

const handler = frames(async () => {
  return {
    image: <div tw="flex">Welcome cocksucker</div>,
    buttons: [
      // With query params
      <Button
        action="post"
        target={{ pathname: "/create-fundraise" }}
      >
        Create a Campaign
      </Button>,
      // Without query params
      <Button action="post" target="/donate">
        Fund me
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
