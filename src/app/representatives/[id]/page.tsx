import { representativeFeature } from "@/features";
import { Buttons } from "@/features/representative-choice/components/buttons";


export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const representative =
    await representativeFeature.service.getRepresentativeById(id);

    const publicUserRepId =
      await representativeFeature.service.getPublicUserRepId();

    console.log(publicUserRepId)
 

  return (
    <main className="flex flex-col justify-center items-center p-0">
      <h1 className="text-center text-4xl font-bold my-10 mt-28">
        {representative.name}
      </h1>
      <Buttons repId={id} publicUserRepId={publicUserRepId}/>
      <div className="flex w-48 items-center justify-between"></div>
      <article className="stats shadow my-8">
        <div className="stat text-center">
          <div className="stat-title">Public votes</div>
          <div className="stat-value">{representative.publicVotes}</div>
        </div>
      </article>
      <article>
        <p>
          <span className="font-bold">Email:</span> {representative.email}
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
