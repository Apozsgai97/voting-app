"use client";
import { Representative } from "@/features/representative-choice/repository";
import { closeAndCalculateVoteResult } from "../action";
import { Election } from "../repository";
import { OpenChoice } from "./open-choice";

type Props = {
  election: Election;
  currentRepresentative: Representative;
};

export function OngoingElection({ election, currentRepresentative }: Props) {
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
          <OpenChoice name={election.choice_1.name} />
          <OpenChoice name={election.choice_2.name} />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <h3 className="text-center text-xl font-bold pb-4">
          Your public voters preferences
        </h3>
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Choice</div>
            <div className="stat-value">{election.choice_1.name}</div>
            <div className="stat-title">Votes</div>
            <div className="stat-value">
              {
                currentRepresentative.elections.find(
                  (e) => e.electionId === election.id
                )?.choice_1_votes
              }
            </div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">Choice</div>
            <div className="stat-value">{election.choice_2.name}</div>
            <div className="stat-title">Votes</div>
            <div className="stat-value">
              {" "}
              {
                currentRepresentative.elections.find(
                  (e) => e.electionId === election.id
                )?.choice_1_votes
              }
            </div>
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
