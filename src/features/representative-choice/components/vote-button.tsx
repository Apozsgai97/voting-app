import { representativeFeature } from "../instance";

type Props = {
  status: "voted" | "unvoted";
  setStatus: React.Dispatch<React.SetStateAction<"voted" | "unvoted">>;
};

export function VoteButton({ status, setStatus }: Props) {
  async function handleVote() {
   setStatus("voted");
   await representativeFeature.service.changeRepIdForPublicUser("m")
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
