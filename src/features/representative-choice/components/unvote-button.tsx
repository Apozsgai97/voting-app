type Props = {
  status: "voted" | "unvoted";
  setStatus: React.Dispatch<React.SetStateAction<"voted" | "unvoted">>;
};
export function UnvotedButton({ status, setStatus }: Props) {
  function handleUnvote() {
   setStatus("unvoted");
  }

  return (
    <button
      onClick={handleUnvote}
      type="submit"
      disabled={status === "unvoted"}
      className="btn bg-emerald-900 text-gray-100 hover:bg-emerald-800 rounded-lg w-20"
    >
      Unvote
    </button>
  );
}
