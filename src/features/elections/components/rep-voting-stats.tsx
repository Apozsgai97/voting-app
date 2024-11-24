import { Representative } from "@/features/representative-choice/repository";
import { Election } from "../repository";

type Props = {
  election: Election;
  representatives: Representative[];
};

export function RepVotingStats({ election, representatives }: Props) {
  return (
    <section>
      <h2 className="text-2xl font-bold mt-4">Representatives Statistics</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Public Votes</th>
              <th>Choice</th>
              <th>Agreement Rate</th>
            </tr>
          </thead>
          <tbody>
            {representatives.map((representative, index) => (
              <tr key={representative.id}>
                <th>{index + 1}</th>
                <td>{representative.name}</td>
                <td>
                  {
                    representative.elections.find(
                      (e) => e.electionId === election.id
                    )?.current_public_votes
                  }
                </td>
                <td>
                  {
                    representative.elections.find(
                      (e) => e.electionId === election.id
                    )?.choice
                  }
                </td>
                <td>
                  {" "}
                  {
                    representative.elections.find(
                      (e) => e.electionId === election.id
                    )?.agreement_rate
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
