import { Buttons, getRepresentativeById, representativeFeature} from "@/features";


export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const representative = await getRepresentativeById(id)

    const publicUserRepId =
      await representativeFeature.service.getPublicUserRepId();

 

  return (
    <main className="flex flex-col justify-center items-center p-0">
      <h1 className="text-center text-4xl font-bold my-10 mt-28">
        {representative?.name || "Name"}
      </h1>
      <Buttons repId={id} publicUserRepId={publicUserRepId}/>
      <div className="flex w-48 items-center justify-between"></div>
      <article className="stats shadow my-8">
        <div className="stat text-center">
          <div className="stat-title">Public votes</div>
          <div className="stat-value">{representative?.publicVotes || 0}</div>
        </div>
      </article>
      <article>
        <p>
          <span className="font-bold">Email:</span> {representative?.email || "example@gmail.com"}
        </p>
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
              <tr>
                <th>1</th>
                <td>Cat or Dog</td>
                <td>Cat</td>
                <td>60%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </main>
  );
}
