export function RepresentativeForm() {
  return (
    <form action="submit" className="flex flex-col p-8 border-2 w-2/6 rounded-lg border-emerald-950">
      <label htmlFor="name" className="label-text pl-6">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Adrienn Pozsgai"
        className="input input-bordered input-primary w-full max-w-xs mb-6"
      />
      <label htmlFor="email" className=" label-text pl-6">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="adrienn.pozsgai@gmail.com"
        className="input input-bordered input-primary w-full max-w-xs mb-6"
      />
      <div>
        <button type="submit" className="btn bg-emerald-950 text-gray-100 hover:bg-emerald-900">
          Add representative
        </button>
      </div>
    </form>
  );
}
