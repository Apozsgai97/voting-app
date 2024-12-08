import Link from "next/link";
import { electionService } from "../instance";

export async function Elections() {
  const elections = await electionService.getAllElections();

  return (
    <section className="flex flex-col justify-center mt-6 w-full lg:w-3/6">
      <div className="lg:overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Issue</th>
              <th>Status</th>
            </tr>
          </thead>
          {elections.map((election, index) => (
            <tbody key={index}>
              <tr className="py-4">
                <th>{index + 1}</th>
                <td>{election.issue}</td>
                <td>{election.status}</td>
                <td>
                  <Link
                    href={`/elections/${election.id}`}
                    className="btn bg-emerald-900 text-gray-100 hover:bg-emerald-800 px-4 py-2 rounded-lg"
                  >
                    Read more
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
}
