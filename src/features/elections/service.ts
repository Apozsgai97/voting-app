import { Repository } from "./repository";
import { v4 as uuidv4 } from "uuid";

export function createElectionService(repository: Repository) {
  return {
    async getAllElections() {
      return await repository.getAllElections();
    },
    async addElection(issue: string, choice1: string, choice2: string) {
      const id = uuidv4();
      const date = new Date().toISOString()

      const election = {
        id: id,
        issue: issue,
        choice_1: choice1,
        choice_2: choice2,
        status: "ongoing",
        publish_date: date,
      };

      repository.addElection(election);
    },
    async getElectionById(id:string){
      return repository.getElectionById(id);
    }
  };
}
