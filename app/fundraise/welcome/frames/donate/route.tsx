/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async (ctx) => {

  return {
    image: <div tw="flex">Route 1 foo</div>, // foo: bar
    textInput: "Enter amount",
    buttons: [
      <Button
        action="tx"
        target="/txdata" post_url="/frames"
      >
        Donate
      </Button>,
      <Button action="post" target="/">
        Go back
      </Button>,
    ],
  };
});
