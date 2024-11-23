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
  let startStatus = "";

  if (publicUserRepId) {
    startStatus = "voted";
  } else {
    startStatus = "unvoted";
  }

  const [status, setStatus] = useState<string>(startStatus);

  return (
    <div className="flex w-48 items-center justify-between">
      <VoteButton status={status} setStatus={setStatus} repId={repId} />
      <UnvotedButton status={status} setStatus={setStatus} repId={repId} publicUserRepId={publicUserRepId}/>
    </div>
  );
}
