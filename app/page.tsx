import { fetchMetadata } from "frames.js/next";
import type { Metadata } from "next";
import Link from "next/link";
import { createDebugUrl } from "./debug";
import { appURL, currentURL } from "./utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "crowdcaster frames",
    description: "This is the new crowdcaster frames app.",
    other: {
      ...(await fetchMetadata(new URL("/frames", appURL()))),
    },
  };
}

// This is a react server component only
export default async function Home() {
  const url = currentURL("/");

  // then, when done, return next frame
  return (
    <div className="text-xl text-center inline-block p-4">
      This is the new crowdcaster frames app.{" "}
      It has been made for the ETHBratislava hackathon.{" "}
      {/* <Link href={createDebugUrl(url)} className="underline">
        Debug
      </Link>{" "} */}
    </div>
  );
}
