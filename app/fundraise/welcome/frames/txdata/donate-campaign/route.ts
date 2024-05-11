import { TransactionTargetResponse } from "frames.js";
import { getFrameMessage } from "frames.js/next/server";
import { NextRequest, NextResponse } from "next/server";
import {
  Abi,
  encodeFunctionData,
} from "viem";
import { simpleCampaign } from "../contracts/simple-campaign";


export async function POST(
  req: NextRequest
): Promise<NextResponse<TransactionTargetResponse>> {
  console.log('heeeeeeeeeeeeeer')
  const json = await req.json();
  console.log(json)
  // console.log('shti')
  // const urlParams = new URLSearchParams(req.url);
  // console.log(urlParams)
  // const amount = Number(urlParams.get("amount"));
  // console.log(amount)

  // const campaignId = urlParams.get("campaignId");
  // console.log(campaignId)


  const frameMessage = await getFrameMessage(json);
  if (!frameMessage) {
    throw new Error("No frame message");
  }
  const DORCO_PIO_ADDRESS = "0x481d58029881a2841e2e6Ba3701Ae55f45fFD406";
  const SIMPLE_CAMPAIGN_ADDRESS = "0x1d8bCf5422e150509C872d8d375120eA0628AC93"
  const data = [1, 1 * 1e18]

  const calldata = encodeFunctionData({
    abi: simpleCampaign,
    functionName: "contribute",
    args: data
  });

  console.log('here')
  return NextResponse.json({
    chainId: "eip155:11155420", // OP Mainnet 10
    method: "eth_sendTransaction",
    params: {
      abi: simpleCampaign as Abi,
      to: SIMPLE_CAMPAIGN_ADDRESS,
      data: calldata,
    },
  });
}
