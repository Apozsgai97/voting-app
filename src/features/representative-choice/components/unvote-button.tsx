import { changeRepId } from "../action";

type Props = {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};
export function UnvotedButton({ status, setStatus }: Props) {
  
 async function handleUnvote() {
   setStatus("unvoted");
   await changeRepId("")
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
