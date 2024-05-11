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

export async function POST(
  req: NextRequest
): Promise<NextResponse<TransactionTargetResponse>> {
  const json = await req.json();

  const frameMessage = await getFrameMessage(json);

  if (!frameMessage) {
    throw new Error("No frame message");
  }
  const DORCO_PIO_ADDRESS = "0x481d58029881a2841e2e6Ba3701Ae55f45fFD406";
  const SIMPLE_CAMPAIGN_ADDRESS = "0x1d8bCf5422e150509C872d8d375120eA0628AC93"
  const data = [10e18, 3600, 100, "0x6Fc92609e4083678a3F41CeffA2d1d036F984fD5", DORCO_PIO_ADDRESS, toHex('name'), toHex('description')]

  const calldata = encodeFunctionData({
    abi: simpleCampaign,
    functionName: "createCampaign",
    args: data
  });

  const publicClient = createPublicClient({
    chain: optimismSepolia,
    transport: http(),
  });
  // const gas = publicClient.estimateGas({ account: '0x6Fc92609e4083678a3F41CeffA2d1d036F984fD5', to: SIMPLE_CAMPAIGN_ADDRESS, data: calldata })
  // console.log(gas)Price
  const gas = await publicClient.estimateGas({
    account: '0x6Fc92609e4083678a3F41CeffA2d1d036F984fD5',
    to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    value: parseEther('0'),
    data: calldata
  })
  console.log(gas)

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
