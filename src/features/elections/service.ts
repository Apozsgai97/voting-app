import { Db } from "@/db";
import { calculateResults } from "./logic";
import { createRepository} from "./repository";
import { ElectionData } from "./types";

export function createService(db: Db, getRepresentativesAndVotes: (id: string) => Promise<{
    name: string;
    publicVotes: number;
    choice: string;
    agreementRate: number;
}[]> ) {
  const repository = createRepository(db);
  
  return {
    async getRepresentativesAndVotes(id: string) {
      return await getRepresentativesAndVotes(id);
    },
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

      await repository.addElection(election);
    },
    async getElectionById(id: string) {
      return await repository.getElectionById(id);
    },
    async calculateVoteResult(id: string) {
      const election = await repository.getElectionById(id);
      const { result1, result2 } = calculateResults(election!);
      repository.changeVoteResult(result1, result2, id);
    },
    async seedElection(electionData: ElectionData) {
      await repository.addElection(electionData);
    },
  };
}
