import {
  electionFeature,
  getRepresentativeById,
  representativeFeature,
} from "@/features";
import { RepresentativeByIdPage } from "@/features";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const representative = await getRepresentativeById(id);

  const votesByRepresentative = await representativeFeature.service.getVotesByRepresentatives(id)

  const publicUserRepId =
    await representativeFeature.service.getPublicUserRepId();

  const elections = await electionFeature.service.getAllElections();

  return (
    <>
      <RepresentativeByIdPage
        representative={representative!}
        publicUserRepId={publicUserRepId}
        elections={elections}
        votesByRepresentative={votesByRepresentative}
      />
    </>
  );
}
