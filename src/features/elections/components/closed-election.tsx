import { RepVoteStats} from "../types";
import { Election } from "../types";
import { RepVotingStats } from "./rep-voting-stats";
import { VotingStatistics } from "./voting-stats";

type Props = {
  election: Election;
  votesWithRepresentativeName: RepVoteStats[];
};

export async function ClosedElection({ election,votesWithRepresentativeName }: Props) {
  return (
    <>
      <h1 className="text-center text-4xl font-bold my-10 mt-28">
        Closed Election
      </h1>
      <VotingStatistics election={election} />
      <RepVotingStats
        votesWithRepresentativeName={votesWithRepresentativeName}
      />
    </>
  );
}
