import { representativeFeature } from "../instance";
import { Election } from "../types";

type Props = {
  elections: Election[];
  representativeId: string;
};
export async function PreviousVotesStats({
  elections,
  representativeId,
}: Props) {
  const votesByRepresentative =
    await representativeFeature.service.getVotesByRepresentatives(
      representativeId
    );

  return (
    <section>
      <h2 className="text-2xl font-bold mt-4">Previous votes</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Issue</th>
              <th>Choice</th>
              <th>Agreement Rate</th>
            </tr>
          </thead>
          <tbody>
            {votesByRepresentative.map((vote, index) => (
              <tr key={vote.id}>
                <th>{index + 1}</th>
                <td>
                  {elections.find((e) => e.id === vote.electionId)?.issue ||
                    "Unknown Issue"}
                </td>
                <td>{vote.choice}</td>
                <td>{vote.agreementRate}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
