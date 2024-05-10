import { frames } from "./frames";
import Image from "next/image";
import next from "next";

const handler = frames(async (ctx) => {
  return {
    image: "https://placekitten.com/200/300",
    // We can generate the image and render it here
    imageOptions:{
      aspectRatio: '1:1',
    },
    textInput:'fuck this shit', 
  };
});

export const GET = handler;
export const POST = handler;
