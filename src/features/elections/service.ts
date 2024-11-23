import { Repository } from "./repository";

export function createElectionService(repository: Repository) {
  return {
    async getAllElections() {
      return await repository.getAllElections();
    },
  };
}
