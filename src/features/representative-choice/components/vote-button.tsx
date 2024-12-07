import { addToPublicVotes, changeRepId } from "../actions";

type Props = {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  representativeId: string;
};

export function VoteButton({ status, setStatus, representativeId }: Props) {
  async function handleVote() {
    setStatus("voted");
    await changeRepId(representativeId);
    await addToPublicVotes(representativeId);
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
