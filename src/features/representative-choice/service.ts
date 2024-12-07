import { Repository } from "./repository";
import { RepresentativeData } from "./types";
import { EmailSchema, NameSchema } from "./validation";

export function createService(repository: Repository) {
  return {
    async getAllRepresentatives() {
      return await repository.getAllRepresentatives();
    },
    async addRepresentative(name: string, email: string) {
      const validatedName = NameSchema.safeParse(name);
      const validatedEmail = EmailSchema.safeParse(email);

      if (!validatedName.success || !validatedEmail.success) {
        return {
          message: "Please provide a valid name and email.",
        };
      }

      const representative: RepresentativeData = {
        name: validatedName.data,
        email: validatedEmail.data,
        publicVotes: 0,
      };

      repository.addRepresentative(representative);
    },
    async getRepresentativeById(id: string) {
      const representatives = await repository.getAllRepresentatives();
      const representative = representatives.find(
        (representative) => id === representative.id
      );
      return representative;
    },
    async changeRepIdForPublicUser(newRepId: string) {
      await repository.changeRepIdForPublicUser(newRepId);
    },
    async getPublicUserRepId() {
      return await repository.getPublicUserRepId();
    },
    async addToPublicVotes(id: string) {
      const representative = await repository.getRepresentativeById(id);
      const newPublicVotes = representative.publicVotes + 1;
      await repository.changePublicVotes(id, newPublicVotes);
    },
    async takeFromPublicVotes(id: string) {
      const representative = await repository.getRepresentativeById(id);
      const newPublicVotes = representative.publicVotes - 1;
      await repository.changePublicVotes(id, newPublicVotes);
    },
    async getVotesByElections(id: string) {
      return await repository.getVotesByElectionId(id);
    },
    async getVotesByRepresentatives(id: string) {
      return await repository.getVotesByRepresentativeId(id);
    },
    async addToPublicPreference(
      id: string,
      electionId: string,
      choiceNumber: number
    ) {
      const election = await repository.getVoteByIds(electionId, id);

      let new_choice_1_votes = election!.choice1Votes;
      let new_choice_2_votes = election!.choice2Votes;
      if (choiceNumber === 1) new_choice_1_votes = new_choice_1_votes + 1;
      if (choiceNumber === 2) new_choice_2_votes = new_choice_2_votes + 1;

      await repository.changeChoiceVotes(
        id,
        electionId,
        new_choice_1_votes,
        new_choice_2_votes
      );
    },
    async getRepresentativesAndVotes(id: string) {
      const electionVotes = await repository.getVotesByElectionId(id);
      const representatives = await repository.getAllRepresentatives();
      const votesWithRepresentativeName = [];
      for (let i = 0; i < electionVotes.length; i++) {
        for (let j = 0; j < representatives.length; j++) {
          if (electionVotes[i].representativeId === representatives[j].id) {
            votesWithRepresentativeName.push({
              name: representatives[j].name,
              publicVotes: electionVotes[i].currentPublicVotes,
              choice: electionVotes[i].choice,
              agreementRate: electionVotes[i].agreementRate,
            });
          }
        }
      }
      return votesWithRepresentativeName;
    },
    async getPublicUserChoiceAndRepresentative(id: string){
      const representative = await repository.getRepresentativeById(id);

      const publicUserRepId = await repository.getPublicUserRepId();

      return {representative, publicUserRepId}
    }
  };
}
