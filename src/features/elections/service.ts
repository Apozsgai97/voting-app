import { calculateResults } from "./logic";
import { Repository } from "./repository";
import { v4 as uuidv4 } from "uuid";

export function createElectionService(repository: Repository) {
  return {
    async getAllElections() {
      return await repository.getAllElections();
    },
    async addElection(issue: string, choice1: string, choice2: string) {
      const id = uuidv4();
      const date = new Date().toISOString();

      const election = {
        id: id,
        issue: issue,
        choice_1: {
          name: choice1,
          votes: 0,
          result: "pending",
        },
        choice_2: {
          name: choice2,
          votes: 0,
          result: "pending",
        },
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
