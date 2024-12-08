import { electionService } from "../instance";


export async function RepVotingStats({id}:{id: string}) {
  const votesWithRepresentativeName =
    await electionService.getRepresentativesAndVotes(id)
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
            {votesWithRepresentativeName.map((vote, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{vote.name}</td>
                <td>{vote.publicVotes}</td>
                <td>{vote.choice}</td>
                <td> {vote.agreementRate}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
