import {ElectionByIdPage } from "@/features";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  //const currentRepresentativeId = "550e8400-e29b-41d4-a716-446655440000";

  return (
    <ElectionByIdPage
      id={id}
    />
  );
}
