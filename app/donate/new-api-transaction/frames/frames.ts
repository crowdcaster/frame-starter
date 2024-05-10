import { createFrames } from "frames.js/next";
import { appURL } from "../../../utils";

export const frames = createFrames({
  basePath: "/donate/new-api-transaction",
  baseUrl: appURL(),
});
