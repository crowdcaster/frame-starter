/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import { generateImage } from "../../../../../scripts/image-generator";

const handleRequest = frames(async (ctx) => {
  console.log(ctx.message);
  return {
    image: ctx.message?.inputText ? await generateImage(ctx.message.inputText): (
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