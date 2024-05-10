/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import { generateImage } from "../../../../../scripts/image-generator";
import { createPublicClient, http } from 'viem'

const handleRequest = frames(async (ctx) => {
  return {
    image: ctx.message?.inputText ? await generateImage(ctx.message.inputText) : (
      <span>
        This is next frame and you clicked button:{" "}
        {ctx.pressedButton ? "✅" : "❌"}
      </span>
    ),
    buttons: [
      <Button action="post" target="/">
        Previous frame
      </Button>,
    ],
  };
});

export const POST = handleRequest;