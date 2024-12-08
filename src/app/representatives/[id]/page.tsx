import {  electionService, RepresentativeByIdPage } from "@/features";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const elections = await electionService.getAllElections();

  return (
    <>
      <RepresentativeByIdPage elections={elections} id={id} />
    </>
  );
}
