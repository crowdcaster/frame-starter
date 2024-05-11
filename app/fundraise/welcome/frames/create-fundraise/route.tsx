/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async () => {
  return {
    image: <div tw="flex">Create a new fundraise</div>,
    textInput: "Explain about your campaign",
    buttons: [
      <Button
        action="tx"
        target="/txdata" post_url="/frames"
      >
        Create campaign
      </Button>,
      <Button action="post" target="/">
        Go back
      </Button>,
    ],
  };
});
