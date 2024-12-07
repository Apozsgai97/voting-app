import { getRepresentativeById } from "../action";


export async function PublicVotes({
  representativeId,
}: {
  representativeId: string;
}) {
  const representative = await getRepresentativeById(representativeId);
  return (
    <>
      <article className="stats shadow my-8">
        <div className="stat text-center">
          <div className="stat-title">Public votes</div>
          <div className="stat-value">{representative?.publicVotes || 0}</div>
        </div>
      </article>
      <p>
        <span className="font-bold">Email:</span>{" "}
        {representative?.email || "example@gmail.com"}
      </p>
    </>
  );
}
