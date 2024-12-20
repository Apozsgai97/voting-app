import { Election } from "./types";

export function calculateResults(election: Election) {
  let result1 = "";
  let result2 = "";
  if (election && election.choice1_votes! < election.choice2_votes!) {
    result1 = "Lose";
    result2 = "Win";
  } else if (election && election.choice1_votes! > election.choice2_votes!) {
    result1 = "Win";
    result2 = "Lose";
  } else {
    result1 = "Tie";
    result2 = "Tie";
  }
  return { result1, result2 };
}
