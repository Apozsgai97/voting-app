import { Election } from "../types";
import { Buttons } from "./buttons";
import { PreviousVotesStats } from "./previous-votes-stats";
import { PublicVotes } from "./public-votes";
import { representativeFeature } from "../instance";

type Props = {
  elections: Election[];
  id: string;
};
export async function RepresentativeByIdPage({ elections, id }: Props) {
  const representativeData =
    await representativeFeature.service.getPublicUserChoiceAndRepresentative(
      id
    );

  return (
    <main className="flex flex-col justify-center items-center p-0">
      <h1 className="text-center text-4xl font-bold my-10 mt-28">
        {representativeData.representative?.name || "Name"}
      </h1>
      <Buttons
        representativeId={id}
        publicUserRepId={representativeData.publicUserRepId}
      />
      <div className="flex w-48 items-center justify-between"></div>
      <PublicVotes representative={representativeData.representative} />
      <PreviousVotesStats elections={elections} representativeId={id} />
    </main>
  );
}
