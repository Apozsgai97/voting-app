import { ElectionVote, Representative } from "@/features/representative-choice/repository";
import { Election } from "../repository";
import { OngoingElection } from "./ongoing-election";
import { ClosedElection } from "./closed-election";

type Props = {
  election: Election;
  currentRepresentative: Representative;
  vote: ElectionVote;
  votesByElection: ElectionVote[];
};


export async function ElectionByIdPage({election, currentRepresentative, vote, votesByElection}: Props){
 return(
   <main className="flex flex-col justify-center items-center p-0">
      {election.status === "ongoing" ? (
        <OngoingElection
          election={election}
          currentRepresentative={currentRepresentative!}
          vote = {vote}
        />
      ) : (
        <ClosedElection election={election} votesByElection ={votesByElection} />
      )}
    </main>
 )
}