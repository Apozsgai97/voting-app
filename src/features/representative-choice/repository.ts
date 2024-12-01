import { db } from "@/db/index";
import { electionVotesTable, representativesTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { RepresentativeData } from "./types";

const publicUser = {
  id: "a3c6f123-4e4a-42b5-80d9-e6b0cd7f5a4f",
  repId: "",
};

export function createRepository() {
  return {
    async getAllRepresentatives() {
      return await db.select().from(representativesTable);
    },
    async addRepresentative(representative: RepresentativeData) {
      await db.insert(representativesTable).values(representative);
    },
    async getRepresentativeById(id: string) {
      const representative = await db
        .select()
        .from(representativesTable)
        .where(eq(representativesTable.id, id));
      return representative[0];
    },
    async changeRepIdForPublicUser(newRepId: string) {
      publicUser.repId = newRepId;
    },
    async getPublicUserRepId() {
      return publicUser.repId;
    },
    async changePublicVotes(id: string, newPublicVotes: number) {
      await db
        .update(representativesTable)
        .set({
          publicVotes: newPublicVotes,
        })
        .where(eq(representativesTable.id, id));
    },
    async getVotesByElectionId(id: string) {
      return await db
        .select()
        .from(electionVotesTable)
        .where(eq(electionVotesTable.electionId, id));
    },
    async getVotesByRepresentativeId(id: string) {
      return await db
        .select()
        .from(electionVotesTable)
        .where(eq(electionVotesTable.representativeId, id));
    },
    async getVoteByIds(electionId: string, representativeId:string){
      const vote = await db.select().from(electionVotesTable).where(and(eq(electionVotesTable.electionId,electionId), eq(electionVotesTable.representativeId, representativeId)))
      return vote[0]
    },
    async changeChoiceVotes(
      id: string,
      electionId: string,
      new_choice_1_votes: number,
      new_choice_2_votes: number
    ) {
      await db.update(electionVotesTable).set({
        choice1Votes:new_choice_1_votes,
        choice2Votes: new_choice_2_votes,
      }).where(and(eq(electionVotesTable.electionId, electionId), eq(electionVotesTable.representativeId, id)))
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
