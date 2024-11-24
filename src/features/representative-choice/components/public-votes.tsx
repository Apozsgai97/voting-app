import { Representative } from "../repository";

export function PublicVotes({
  representative,
}: {
  representative: Representative;
}) {
  return (
    <article className="stats shadow my-8">
      <div className="stat text-center">
        <div className="stat-title">Public votes</div>
        <div className="stat-value">{representative?.publicVotes || 0}</div>
      </div>
    </article>
  );
}
