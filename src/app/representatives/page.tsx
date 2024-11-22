export default function Page() {
  return (
    <main>
      <h1>Representatives</h1>
      <section>
       <p>Representative placeholder</p>
      </section>
      <section>
       <h2>Add new representative</h2>
       <form action="submit">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Adrienn Pozsgai" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="adrienn.pozsgai@gmail.com" />
        <button type="submit">Add representative</button>
       </form>
      </section>

    </main>
  );
}
