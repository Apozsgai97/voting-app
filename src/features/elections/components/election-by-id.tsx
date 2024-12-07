import { RepVoteStats } from "../types";
import { OngoingElection } from "./ongoing-election";
import { ClosedElection } from "./closed-election";
import { electionFeature } from "../instance";

type Props = {
  id: string;
  votesWithRepresentativeName: RepVoteStats[];
};

export async function ElectionByIdPage({
  id,
  votesWithRepresentativeName,
}: Props) {
  const election = await electionFeature.service.getElectionById(id);
  return (
    <main className="flex flex-col justify-center items-center p-0">
      {election.status === "ongoing" ? (
        <OngoingElection election={election} />
      ) : (
        <ClosedElection
          election={election}
          votesWithRepresentativeName={votesWithRepresentativeName}
        />
      )}
    </main>
  );
}
