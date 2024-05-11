/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async (ctx) => {

  return {
    image: <div tw="flex">Donate</div>, // foo: bar
    textInput: "Enter amount",
    buttons: [
      <Button
        action="tx"
        target={{ pathname: "/txdata/approve", query: { campaign_id: 1, amount: ctx.message?.inputText } }} post_url={{ pathname: "/donate" }}
      >
        Approve
      </Button>,
      <Button action="post" target="/">
        Go back
      </Button>,
    ],
  };
});
