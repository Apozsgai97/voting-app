import { Representative } from "@/features/representative-choice/repository";
import { Election } from "../repository";
import { RepVotingStats } from "./rep-voting-stats";
import { VotingStatistics } from "./voting-stats";

type Props = {
  election: Election;
  representatives: Representative[];
};

export async function ClosedElection({ election, representatives }: Props) {
  return (
    <>
      <h1 className="text-center text-4xl font-bold my-10 mt-28">
        Closed Election
      </h1>
      <VotingStatistics election={election} />
      <RepVotingStats election={election} representatives={representatives} />
    </>
  );
}
