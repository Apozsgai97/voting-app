export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  return (
    <main className="flex flex-col justify-center items-center p-0">
     <h1 className="mt-24">{id}</h1>
    </main>
  );
}
