export async function OngoingElection() {
  return (
    <>
      <h1 className="text-center text-4xl font-bold my-10 mt-28">
        Ongoing Election
      </h1>
      <section>
      <h2 className="text-center text-4xl">Issue</h2>
      <div className="flex items-center justify-between gap-12">
      <article className="stats shadow my-8">
        <div className="stat text-center">
          <div className="stat-title">First Choice</div>
          <div className="stat-value">choice</div>
          <div className="flex justify-center items-center pt-4">
            <button
              className=" btn
           bg-emerald-900
           text-gray-100
           hover:bg-emerald-800
           rounded-lg
           w-20"
            >
              Vote
            </button>
          </div>
        </div>
      </article>
      <article className="stats shadow my-8">
        <div className="stat text-center">
          <div className="stat-title">Second Choice</div>
          <div className="stat-value">choice</div>
          <div className="flex justify-center items-center pt-4">
            <button
              className=" btn
           bg-emerald-900
           text-gray-100
           hover:bg-emerald-800
           rounded-lg
           w-20"
            >
              Vote
            </button>
          </div>
        </div>
      </article>
      </div>
      </section>
    </>
  );
}
