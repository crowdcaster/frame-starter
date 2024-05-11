import { TransactionTargetResponse } from "frames.js";
import { getFrameMessage } from "frames.js/next/server";
import { NextRequest, NextResponse } from "next/server";
import {
  Abi,
  createPublicClient,
  encodeFunctionData,
  http,
  parseEther,
  toBytes,
  toHex,
} from "viem";
import { simpleCampaign } from "../contracts/simple-campaign";
import { optimismSepolia } from "viem/chains";
import { erc20Abi } from "../contracts/erc-20";
import { useSearchParams } from "next/navigation";


export async function POST(
  req: NextRequest
): Promise<NextResponse<TransactionTargetResponse>> {
  const json = await req.json();

  const amount = Number(json['untrustedData']['inputText'])

  const frameMessage = await getFrameMessage(json);
  if (!frameMessage) {
    throw new Error("No frame message");
  }
  const DORCO_PIO_ADDRESS = "0x481d58029881a2841e2e6Ba3701Ae55f45fFD406";
  const SIMPLE_CAMPAIGN_ADDRESS = "0x1d8bCf5422e150509C872d8d375120eA0628AC93"
  const data = [SIMPLE_CAMPAIGN_ADDRESS, amount * 1e18]

  const calldata = encodeFunctionData({
    abi: erc20Abi,
    functionName: "approve",
    args: data
  });

  return NextResponse.json({
    chainId: "eip155:11155420", // OP Mainnet 10
    method: "eth_sendTransaction",
    params: {
      abi: erc20Abi as Abi,
      to: DORCO_PIO_ADDRESS,
      data: calldata,
    },
  });
}
