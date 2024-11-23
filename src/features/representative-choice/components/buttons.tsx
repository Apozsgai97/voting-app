"use client";
import { useState } from "react";
import { UnvotedButton } from "./unvote-button";
import { VoteButton } from "./vote-button";

export function Buttons({
  repId,
  publicUserRepId,
}: {
  repId: string;
  publicUserRepId: string;
}) {
 
  const [status, setStatus] = useState<"voted" | "unvoted">(
    publicUserRepId === repId ? "voted" : "unvoted"
  );

  return (
    <div className="flex w-48 items-center justify-between">
      <VoteButton status={status} setStatus={setStatus} repId={repId} />
      <UnvotedButton status={status} setStatus={setStatus} />
    </div>
  );
}
