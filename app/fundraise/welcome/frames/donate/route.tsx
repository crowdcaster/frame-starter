/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";

export const POST = frames(async (ctx) => {

    return {
        image: <div tw="flex">Do you really want to donate {ctx.message?.inputText} $PIO to this Campaign </div>, // foo: bar
        buttons: [
            <Button
                action="tx"
                target={{ pathname: "/txdata/donate-campaign", query: { id: 0, campaign: 1, amount: ctx.message?.inputText } }} post_url="/frames"
            >
                Donate
            </Button>,
            <Button action="post" target="/">
                Go back
            </Button>,
        ],
    };
});
