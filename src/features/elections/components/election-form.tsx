export async function ElectionForm() {
  return (
    <form
      action={"h"}
      className="flex flex-col  justify-center items-center p-8 w-full shadow-lg"
    >
      <label htmlFor="issue" className="label-text">
        Issue
      </label>
      <input
        type="text"
        name="issue"
        id="issue"
        placeholder="Cat or Dogs"
        className="input input-bordered input-primary w-full max-w-xs mb-6 bg-slate-50"
      />
      <label htmlFor="choice-1" className=" label-text">
        First choice
      </label>
      <input
        type="text"
        id="choice-1"
        name="choice-1"
        placeholder="cat"
        className="input input-bordered input-primary w-full max-w-xs mb-6 bg-slate-50"
      />
      <label htmlFor="choice-2" className=" label-text">
        Second choice
      </label>
      <input
        type="text"
        id="choice-2"
        name="choice-2"
        placeholder="dog"
        className="input input-bordered input-primary w-full max-w-xs mb-6 bg-slate-50"
      />
      <div>
        <button
          type="submit"
          className="btn bg-emerald-900 text-gray-100 hover:bg-emerald-800 rounded-lg"
        >
          Add Election
        </button>
      </div>
    </form>
  );
}
