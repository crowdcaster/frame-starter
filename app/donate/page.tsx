import Link from "next/link";

export default function ExamplesIndexPage() {
  return (
    <div className="p-2 flex flex-col gap-2">
      <b>Frames.js v0.9</b>
      <ul>
        <li>
          <Link className="underline" href="/donate/new-api">
            Basic
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/new-api-transaction">
            Transactions
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/new-api-multi-page">
            Multi Page
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/new-api-mint-button">
            Mint button
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            href="/donate/new-api-only-followers-can-mint"
          >
            Only followers can mint
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/new-api-post-redirect">
            Post redirect
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/new-api-multi-protocol">
            Open Frames
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/new-api-cache-control">
            Caching
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/new-api-slow-request">
            Slow requests
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/new-api-state-signing">
            State Signing
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            href="/donate/new-api-state-via-query-params"
          >
            State via Query Params
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/new-api-error">
            Errors
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/new-api-images-worker">
            Images worker
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            href="/donate/new-api-images-worker-custom"
          >
            Images worker custom renderer
          </Link>
        </li>
      </ul>
      <b>Frames.js v0.8 and below</b>
      <ul>
        <li>
          <Link className="underline" href="/">
            Basic
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/transaction">
            Transactions
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/custom-hub">
            Custom Hub
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/mint-button">
            Mint button
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/multi-page">
            Multi page
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/multi-protocol">
            Multi protocol
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/only-followers-can-mint">
            Only followers can mint
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/slow-request">
            Slow request
          </Link>
        </li>
        <li>
          <Link className="underline" href="/donate/user-data">
            User data
          </Link>
        </li>
        <li>
          <Link className="underline" href="/page-router">
            Page router
          </Link>
        </li>
      </ul>
    </div>
  );
}
