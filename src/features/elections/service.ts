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
    async getElectionById(id:string){
      return repository.getElectionById(id);
    },
    async calculateVoteResult(id:string){
      const election= await repository.getElectionById(id);
      let result1 = ""
      let result2 = ""
      if(election && election.choice_1.votes < election.choice_2.votes){
        result1 = "Lose"
        result2 = "Win"
      } else if (election && election.choice_1.votes > election?.choice_2.votes){
        result1 = "Win"
        result2 = "Lose"
      } else{
        result1 = "Tie"
        result2 = "Tie"
      }
      repository.changeVoteResult(result1, result2, id)

    }
  };
}
