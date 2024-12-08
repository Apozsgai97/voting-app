import { OngoingElection } from "./ongoing-election";
import { ClosedElection } from "./closed-election";
import { electionService } from "../instance";

type Props = {
  id: string;
};

export async function ElectionByIdPage({
  id,
}: Props) {
  const election = await electionService.getElectionById(id);
  return (
    <main className="flex flex-col justify-center items-center p-0">
      {election.status === "ongoing" ? (
        <OngoingElection election={election} />
      ) : (
        <ClosedElection
          election={election}
         id={id}
        />
      )}
    </main>
  );
}
