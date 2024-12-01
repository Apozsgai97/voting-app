import { ElectionVote } from "@/features/representative-choice/repository";

type Props = {
  votesByElection: ElectionVote[];
};

export function RepVotingStats({ votesByElection }: Props) {
  return (
    <section>
      <h2 className="text-2xl font-bold mt-4">Representatives Statistics</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Representative Id</th>
              <th>Public Votes</th>
              <th>Choice</th>
              <th>Agreement Rate</th>
            </tr>
          </thead>
          <tbody>
            {votesByElection.map((vote, index) => (
              <tr key={vote.id}>
                <th>{index + 1}</th>
                <td>{vote.representativeId}</td>
                <td>
                  {
                   vote.currentPublicVotes
                  }
                </td>
                <td>
                 {vote.choice}
                </td>
                <td>
                  {" "}
                  {
                   vote.agreementRate
                  }
                  %
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
