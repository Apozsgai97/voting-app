export function RepresentativeForm() {
  return (
    <form
      action="submit"
      className="flex flex-col  justify-center items-center p-8 w-full border-2 bg-slate-50"
    >
      <label htmlFor="name" className="label-text">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Adrienn Pozsgai"
        className="input input-bordered input-primary w-full max-w-xs mb-6 bg-white"
      />
      <label htmlFor="email" className=" label-text">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="adrienn.pozsgai@gmail.com"
        className="input input-bordered input-primary w-full max-w-xs mb-6 bg-white"
      />
      <div>
        <button
          type="submit"
          className="btn bg-emerald-950 text-gray-100 hover:bg-emerald-900"
        >
          Add representative
        </button>
      </div>
    </form>
  );
}
