import { createElectionRepository } from "./repository";
import { createElectionService } from "./service";

export function createElectionFeature() {
  const repository = createElectionRepository();
  const service = createElectionService(repository);

  return { service };
}
