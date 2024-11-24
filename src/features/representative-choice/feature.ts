import { createRepository } from "./repository";
import { createService } from "./service";

export function createRepresentativeFeature() {
  const repository = createRepository();
  const service = createService(repository);

  return { service };
}
