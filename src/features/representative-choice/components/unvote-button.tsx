import { changeRepId, takeFromPublicVotes } from "../actions";

type Props = {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  representativeId: string;
  publicUserRepId: string;
};
export function UnvotedButton({
  status,
  setStatus,
  representativeId,
  publicUserRepId,
}: Props) {
  async function handleUnvote() {
    setStatus("unvoted");
    await changeRepId("");
    await takeFromPublicVotes(representativeId);
  }

  return (
    <button
      onClick={handleUnvote}
      type="submit"
      disabled={status === "unvoted" || publicUserRepId !== representativeId}
      className="btn bg-emerald-900 text-gray-100 hover:bg-emerald-800 rounded-lg w-20"
    >
      Unvote
    </button>
  );
}
