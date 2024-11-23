export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  console.log({id})

  return (
    <main className="flex flex-col justify-center items-center p-0">
      <h1 className="text-center text-4xl font-bold my-10 mt-28">
        Representative name
      </h1>
      <div className="flex w-48 items-center justify-between">
        <button
          type="submit"
          className="btn bg-emerald-900 text-gray-100 hover:bg-emerald-800 rounded-lg w-20"
        >
          Vote
        </button>
        <button
          type="submit"
          className="btn bg-emerald-900 text-gray-100 hover:bg-emerald-800 rounded-lg w-20"
        >
          Unvote
        </button>
      </div>
      <article className="stats shadow my-8">
        <div className="stat text-center">
          <div className="stat-title">Public votes</div>
          <div className="stat-value">0</div>
        </div>
      </article>
      <div>
        <h2 className="text-2xl font-bold">Previous votes</h2>
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
              <tr>
                <th>1</th>
                <td>Cat or Dog</td>
                <td>Cat</td>
                <td>60%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
