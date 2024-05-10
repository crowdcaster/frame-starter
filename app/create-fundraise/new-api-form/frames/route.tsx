/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <span>
        {ctx.message?.inputText ? `Your campaign is about: ${ctx.message?.inputText}` : "Hello! 👋🏻"}
      </span>
    ),
    textInput: "Tell us about your campaign!",
    buttons: [
      <Button action="post">Publish Campaign</Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;