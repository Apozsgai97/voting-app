import { z } from "zod";
import { Repository, Representative } from "./repository";
import { v4 as uuidv4 } from "uuid";

const NameSchema = z
  .string()
  .min(1, { message: "This field has to be filled." });

const EmailSchema = z
  .string()
  .min(1, { message: "This field has to be filled." })
  .email("This is not a valid email.");

export function createService(repository: Repository) {
  return {
    async getAllRepresentatives() {
      return await repository.getAllRepresentatives();
    },
    async addRepresentative(name: string, email: string) {
      const validatedName = NameSchema.safeParse(name);
      const validatedEmail = EmailSchema.safeParse(email);
      const id = uuidv4();

      if (!validatedName.success || !validatedEmail.success) {
        return {
          message: "Please provide a valid name and email.",
        };
      }

      const representative: Representative = {
        id: id,
        name: validatedName.data,
        email: validatedEmail.data,
        publicVotes: 0,
        elections: [],
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
    async getRepresentativesThatVoted(id: string) {
      const representatives = await repository.getAllRepresentatives();
      const representativesThatVoted = representatives.filter(
        (representative) =>
          representative.elections.some((e) => e.electionId === id)
      );
      return representativesThatVoted;
    },
    async addToPublicPreference(
      id: string,
      electionId: string,
      choiceNumber: number
    ) {
      const representative = await repository.getRepresentativeById(id);
      const election = representative.elections.find(
        (election) => election.electionId === electionId
      );
      let new_choice_1_votes = election!.choice_1_votes;
      let new_choice_2_votes = election!.choice_2_votes;
      if (choiceNumber === 1) new_choice_1_votes = new_choice_1_votes + 1;
      if (choiceNumber === 2) new_choice_2_votes = new_choice_2_votes + 1;

      await repository.changeChoiceVotes(
        id,
        electionId,
        new_choice_1_votes,
        new_choice_2_votes
      );
    },
  };
}
