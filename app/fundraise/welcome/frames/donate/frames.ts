import { createFrames } from "frames.js/next";
import { appURL } from "../../../../utils";

export const frames = createFrames({
    basePath: "/fundraise/welcome/frames/donate",
    baseUrl: appURL(),
});
