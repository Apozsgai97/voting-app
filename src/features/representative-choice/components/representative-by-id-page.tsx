import { Election } from "@/features/elections/repository";
import { Buttons } from "./buttons";
import { PreviousVotesStats } from "./previous-votes-stats";
import { PublicVotes } from "./public-votes";
import { ElectionVote, Representative } from "../repository";

type Props = {
  elections: Election[];
  votesByRepresentative: ElectionVote[];
  representative: Representative;
  publicUserRepId: string;
};
export async function RepresentativeByIdPage({elections, votesByRepresentative, publicUserRepId, representative}: Props) {
 return (
   <main className="flex flex-col justify-center items-center p-0">
     <h1 className="text-center text-4xl font-bold my-10 mt-28">
       {representative?.name || "Name"}
     </h1>
     <Buttons repId={representative.id} publicUserRepId={publicUserRepId} />
     <div className="flex w-48 items-center justify-between"></div>
     <PublicVotes representative={representative!} />
     <p>
       <span className="font-bold">Email:</span>{" "}
       {representative?.email || "example@gmail.com"}
     </p>
     <PreviousVotesStats
       elections={elections}
       votesByRepresentative={votesByRepresentative}
     />
   </main>
 );}
