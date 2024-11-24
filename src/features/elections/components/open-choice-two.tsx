"use client";
import { addToPublicPreference } from "@/features/representative-choice";
type Props = {
  name: string;
  choiceNumber: number;
  representativeId: string;
  electionId: string;
};
export function OpenChoiceTwo({
  name,
  representativeId,
  electionId,
  choiceNumber,
}: Props) {
  async function addPreferenceTwo() {
    await addToPublicPreference(representativeId, electionId, choiceNumber);
  }
  console.log(choiceNumber);

  return (
    <article className="stats shadow my-8">
      <div className="stat text-center">
        <div className="stat-title">Choice</div>
        <div className="stat-value">{name}</div>
        <div className="flex flex-col justify-center items-center pt-4 gap-4">
          <button
            className=" btn
           bg-emerald-900
           text-gray-100
           hover:bg-emerald-800
           rounded-lg
           w-20"
          >
            Vote
          </button>
          <button
            onClick={addPreferenceTwo}
            className=" btn
           bg-emerald-900
           text-gray-100
           hover:bg-emerald-800
           rounded-lg
           "
          >
            Add preference
          </button>
        </div>
      </div>
    </article>
  );
}
