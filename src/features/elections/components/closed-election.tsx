import { Election } from "../repository";

type Props = {
 election: Election
}

export async function ClosedElection({election}:Props) {
  return (
    <>
      <h1 className="text-center text-4xl font-bold my-10 mt-28">
        Closed Election
      </h1>
      <section>
        <h2 className="text-center text-4xl font-bold">{election.issue}</h2>
        <div className="flex items-center justify-center gap-12">
          <article className="stats shadow my-8">
            <div className="stat text-center">
              <div className="stat-title">First Choice</div>
              <div className="stat-value">{election.choice_1}</div>
              <div className="stat-title">Votes</div>
              <div className="stat-value">20</div>
              <div className="stat-title">Result</div>
              <div className="stat-value">Win</div>
            </div>
          </article>
          <article className="stats shadow my-8">
            <div className="stat text-center">
              <div className="stat-title">Second Choice</div>
              <div className="stat-value">{election.choice_2}</div>
              <div className="stat-title">Votes</div>
              <div className="stat-value">10</div>
              <div className="stat-title">Result</div>
              <div className="stat-value">Lose</div>
            </div>
          </article>
        </div>
      </section>
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
              <tr>
                <th>1</th>
                <td>Taylor Smith</td>
                <td>20</td>
                <td>Yes</td>
                <td>60%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
