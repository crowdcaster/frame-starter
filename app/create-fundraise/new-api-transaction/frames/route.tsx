/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
import { keccak256, toHex } from "viem";
import { getAddressForFid, getFrameMessage } from "frames.js";
import { FidRequest } from "@farcaster/core";
import { FrameActionPayload } from "frames.js";
import { NextRequest, NextResponse } from "next/server";


async function getResponse(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const body: FrameActionPayload = await req.json();
  const id = params.id;

  // const { isValid, message } = await validateFrameMessage(body);

  const message = await getFrameMessage(body);

  console.log(message);

  try {

  } catch (e) {
    return new NextResponse(tryAgainResponse(e.message));
  }
}

const checkIfValidTransactionAccount = async (account: number) => {
  const address = await getAddressForFid({
    fid: account,
    options: { fallbackToCustodyAddress: true },
  });

  let nonceString = toHex("dorcopio");
  const nonce = keccak256(nonceString);

  return address;
};

const handleRequest = frames(async (ctx) => {
  if (ctx.message?.transactionId) {
    return {
      image: (
        <div tw="bg-purple-800 text-white w-full h-full justify-center items-center flex">
          Transaction submitted! {ctx.message.transactionId}
        </div>
      ),
      imageOptions: {
        aspectRatio: "1:1",
      },
      buttons: [
        <Button
          action="link"
          target={`https://www.onceupon.gg/tx/${ctx.message.transactionId}`}
        >
          View on block explorer
        </Button>,
      ],
    };
  }

  return {
    image: (
      <div tw="bg-purple-800 text-white w-full h-full justify-center items-center">
        Rent farcaster storage
      </div>
    ),
    // textInput: "Explain about your campaign",
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button action="tx" target="/txdata" post_url="/frames">
        Buy a unit
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
