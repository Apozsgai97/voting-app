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
        <ChoiceStat
          name={election.choice1_name}
          votes={election.choice1_votes}
          result={election.choice1_result}
        />
        <ChoiceStat
          name={election.choice2_name}
          votes={election.choice2_votes}
          result={election.choice2_result}
        />
      </div>
    </section>
  );
}
