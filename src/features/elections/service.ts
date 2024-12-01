import { calculateResults } from "./logic";
import { Repository } from "./repository";

export function createElectionService(repository: Repository) {
  return {
    async getAllElections() {
      return await repository.getAllElections();
    },
    async addElection(issue: string, choice1: string, choice2: string) {
      const date = new Date().toISOString();

      const election = {
        issue: issue,
        choice1_name: choice1,
        choice1_votes: 0,
        choice1_result: "pending",
        choice2_name: choice2,
        choice2_votes: 0,
        choice2_result: "pending",
        status: "ongoing",
        publish_date: date,
      };

      repository.addElection(election);
    },
    async getElectionById(id: string) {
      return repository.getElectionById(id);
    },
    async calculateVoteResult(id: string) {
      const election = await repository.getElectionById(id);
      const { result1, result2 } = calculateResults(election!);
      repository.changeVoteResult(result1, result2, id);
    },
  };
}
