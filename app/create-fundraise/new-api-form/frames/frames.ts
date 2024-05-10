import { createFrames } from "frames.js/next";
import { appURL } from "../../../utils";

export const frames = createFrames({
  basePath: "/create-fundraise/new-api-form/frames",
  baseUrl: appURL(),
});