import { Election } from "@/features/elections/repository";
import { Representative } from "../repository";

type Props = {
  elections: Election[];
  representative: Representative;
};
export function PreviousVotesStats({ elections, representative }: Props) {
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
            {representative?.elections.map((representative, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  {elections.find((e) => e.id === representative.electionId)
                    ?.issue || "Unknown Issue"}
                </td>
                <td>{representative.choice}</td>
                <td>{representative.agreement_rate}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
