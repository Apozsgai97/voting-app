import { ElectionVote, Representative } from "../types";
import { OngoingElection } from "./ongoing-election";
import { ClosedElection } from "./closed-election";
import { electionFeature } from "../instance";

type Props = {
  id: string;
  currentRepresentative: Representative;
  vote: ElectionVote;
  votesByElection: ElectionVote[];
};

export async function ElectionByIdPage({
  id,
  currentRepresentative,
  vote,
  votesByElection,
}: Props) {
  const election = await electionFeature.service.getElectionById(id);
  return (
    <main className="flex flex-col justify-center items-center p-0">
      {election.status === "ongoing" ? (
        <OngoingElection
          election={election}
          currentRepresentative={currentRepresentative!}
          vote={vote}
        />
      ) : (
        <ClosedElection election={election} votesByElection={votesByElection} />
      )}
    </main>
  );
}
