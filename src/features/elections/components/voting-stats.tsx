import { Election } from "../repository";
import { ChoiceStat } from "./choice-stat";

type Props = {
  election: Election;
};

export function VotingStatistics({ election }: Props) {
  return (
    <section>
      <h2 className="text-center text-4xl font-bold">{election.issue}</h2>
      <div className="flex items-center justify-center gap-12">
        <ChoiceStat choice={election.choice_1} />
        <ChoiceStat choice={election.choice_2} />
      </div>
    </section>
  );
}
