import { changeRepId, takeFromPublicVotes } from "../action";

type Props = {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  repId: string;
  publicUserRepId: string;
};
export function UnvotedButton({ status, setStatus, repId, publicUserRepId }: Props) {
  async function handleUnvote() {
    setStatus("unvoted");
    await changeRepId("");
    await takeFromPublicVotes(repId)
  }

  return (
    <button
      onClick={handleUnvote}
      type="submit"
      disabled={status === "unvoted" || publicUserRepId !== repId}
      className="btn bg-emerald-900 text-gray-100 hover:bg-emerald-800 rounded-lg w-20"
    >
      Unvote
    </button>
  );
}
