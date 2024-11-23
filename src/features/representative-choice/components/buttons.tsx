"use client"
import { useState } from "react";
import { UnvotedButton } from "./unvote-button";
import { VoteButton } from "./vote-button";

export function Buttons(){
  const [status, setStatus] = useState<"voted" | "unvoted">("unvoted");
 
 return (
   <div className="flex w-48 items-center justify-between">

    <VoteButton status={status} setStatus={setStatus} />
    <UnvotedButton status={status} setStatus={setStatus} />
   </div>
 );
}