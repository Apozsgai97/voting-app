export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  console.log({id})

  return (
    <main>
      <h1>Representative name</h1>
      <button>Vote</button>
      <button>Unvote</button>
      <p>Public votes</p>
      <div>
       <h2>Previous votes</h2>
       <div>
         <p>choice</p>
         <p>agreement rate</p>
       </div>
      </div>
    </main>
  );
}
