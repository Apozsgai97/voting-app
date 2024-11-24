"use client"
import { closeAndCalculateVoteResult } from "../action";
import { Election } from "../repository";
import { OpenChoice } from "./open-choice";

type Props = {
  election: Election;
};

export function OngoingElection({ election }: Props) {
  
 async function handleClick() {
   await closeAndCalculateVoteResult(election.id);
  }
 
 
 return (
    <>
      <h1 className="text-center text-4xl font-bold my-10 mt-28">
        Ongoing Election
      </h1>
      <section>
        <h2 className="text-center text-4xl font-bold">{election.issue}</h2>
        <div className="flex items-center justify-center gap-12">
          <OpenChoice name={election.choice_1.name} />
          <OpenChoice name={election.choice_2.name} />
        </div>
      </section>
      <button
      onClick={handleClick}
        className=" btn
           bg-red-950
           text-gray-100
           hover:bg-red-900
           rounded-lg"
      >
        Close Election
      </button>
    </>
  );
}
