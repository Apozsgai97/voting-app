import { Election } from "../types";
import { Buttons } from "./buttons";
import { PreviousVotesStats } from "./previous-votes-stats";
import { PublicVotes } from "./public-votes";
import { getRepresentativeById } from "../action";
import { representativeFeature } from "../instance";

type Props = {
  elections: Election[];
  id: string;
};
export async function RepresentativeByIdPage({ elections, id }: Props) {
  const representative = await getRepresentativeById(id);

  const publicUserRepId =
    await representativeFeature.service.getPublicUserRepId();
  return (
    <main className="flex flex-col justify-center items-center p-0">
      <h1 className="text-center text-4xl font-bold my-10 mt-28">
        {representative?.name || "Name"}
      </h1>
      <Buttons representativeId={id} publicUserRepId={publicUserRepId} />
      <div className="flex w-48 items-center justify-between"></div>
      <PublicVotes representative={representative!} />
      <PreviousVotesStats
        elections={elections}
        representativeId={id}
      />
    </main>
  );
}
