import { addToPublicVotes, changeRepId } from "../action";

type Props = {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  repId: string;
};

export function VoteButton({ status, setStatus, repId }: Props) {
  async function handleVote() {
    setStatus("voted");
    await changeRepId(repId);
    await addToPublicVotes(repId);
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
