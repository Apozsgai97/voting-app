import { ElectionVote, Election } from "../types";

type Props = {
  elections: Election[];
  votesByRepresentative: ElectionVote[]
};
export function PreviousVotesStats({ elections, votesByRepresentative}: Props) {
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
                  {elections.find((e) => e.id === vote.electionId)
                    ?.issue || "Unknown Issue"}
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
