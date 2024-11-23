import { changeRepId } from "../action";

type Props = {
  status: "voted" | "unvoted";
  setStatus: React.Dispatch<React.SetStateAction<"voted" | "unvoted">>;
  repId: string;
};

export function VoteButton({
  status,
  setStatus,
  repId,

}: Props) {
  async function handleVote() {
     if (status === "voted") return; 
    setStatus("voted");
    await changeRepId(repId);
  }

  return (
    <button
      onClick={handleVote}
      type="submit"
      disabled={status === "voted"}
      className="btn bg-emerald-900 text-gray-100 hover:bg-emerald-800 rounded-lg w-20"
    >
      Vote
    </button>
  );
}
