"use client";

import { closeAndCalculateVoteResult } from "../actions";
import { Election } from "../types";
import { OpenChoiceOne } from "./open-choice-one";
import { OpenChoiceTwo } from "./open-choice-two";

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
        <h2 className="text-center text-2xl font-bold">{election.issue}</h2>
        <div className="flex items-center justify-center gap-12">
          <OpenChoiceOne name={election.choice1_name} />
          <OpenChoiceTwo name={election.choice2_name} />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <h3 className="text-center text-xl font-bold pb-4">
          Your public voters preferences
        </h3>
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Choice</div>
            <div className="stat-value">{election.choice1_name}</div>
            <div className="stat-title">Votes</div>
            <div className="stat-value"> 0</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">Choice</div>
            <div className="stat-value">{election.choice2_name}</div>
            <div className="stat-title">Votes</div>
            <div className="stat-value"> 0</div>
          </div>
        </div>
      </section>
      <button
        onClick={handleClick}
        className=" btn
           bg-red-950
           text-gray-100
           hover:bg-red-900
           rounded-lg mt-6"
      >
        Close Election
      </button>
    </>
  );
}
