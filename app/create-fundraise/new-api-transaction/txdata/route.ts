import { TransactionTargetResponse } from "frames.js";
import { getFrameMessage } from "frames.js/next/server";
import { NextRequest, NextResponse } from "next/server";
import {
  Abi,
  createPublicClient,
  encodeFunctionData,
  getContract,
  http,
} from "viem";
import { optimismSepolia } from "viem/chains";
import { erc20Abi } from "./contracts/erc-20";

export async function POST(
  req: NextRequest
): Promise<NextResponse<TransactionTargetResponse>> {
  const json = await req.json();

  const frameMessage = await getFrameMessage(json);

  if (!frameMessage) {
    throw new Error("No frame message");
  }

  // Get current storage price
  const units = 1n;

  const calldata = encodeFunctionData({
    abi: erc20Abi,
    functionName: "transfer",
    args: ['0x6Fc92609e4083678a3F41CeffA2d1d036F984fD5', 1e18],
  });

  const publicClient = createPublicClient({
    chain: optimismSepolia,
    transport: http(),
  });

  const DORCO_PIO_ADDRESS = "0x481d58029881a2841e2e6Ba3701Ae55f45fFD406";

  const dorcoPio = getContract({
    address: DORCO_PIO_ADDRESS,
    abi: erc20Abi,
    client: publicClient,
  });

  const unitPrice = await dorcoPio.read.balanceOf(publicClient.account);
  const price = unitPrice ? unitPrice : 0

  return NextResponse.json({
    chainId: "eip155:11155420", // OP Mainnet 10
    method: "eth_sendTransaction",
    params: {
      abi: erc20Abi,
      to: DORCO_PIO_ADDRESS,
      data: calldata,
      value: price.toString(),
    },
  });
}
