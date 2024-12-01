import { db } from "@/db/index";
import { electionVotesTable, representativesTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { RepresentativeData } from "./types";

// const representatives: any = [
//   {
//     id: "550e8400-e29b-41d4-a716-446655440000",
//     name: "Alex Johnson",
//     email: "alex.johnson@example.com",
//     publicVotes: 10,
//     elections: [
//       {
//         electionId: "88b9c1b8-abe6-4b93-8197-bf25bf84364f",
//         choice_1_votes: 5,
//         choice_2_votes: 5,
//         current_public_votes: 10,
//         choice: "Yes",
//         agreement_rate: 50,
//       },
//       {
//         electionId: "3165d5b5-91fc-45df-97f0-6a9e02a3daaa",
//         choice_1_votes: 5,
//         choice_2_votes: 7,
//         current_public_votes: 12,
//         choice: "No",
//         agreement_rate: 58,
//       },
//       {
//         electionId: "ad931316-554e-4075-89e9-e0ce6b40f6eb",
//         choice_1_votes: 1,
//         choice_2_votes: 11,
//         current_public_votes: 12,
//         choice: "No",
//         agreement_rate: 92,
//       },
//       {
//         electionId: "a9985f84-bb9e-44f9-bd08-d87d70567e10",
//         choice_1_votes: 9,
//         choice_2_votes: 2,
//         current_public_votes: 11,
//         choice: "Yes",
//         agreement_rate: 82,
//       },
//       {
//         electionId: "e5c5fa2f-071b-46f8-baf8-3306f585c6fa",
//         choice_1_votes: 5,
//         choice_2_votes: 5,
//         current_public_votes: 10,
//         choice: "No",
//         agreement_rate: 50,
//       },
//       {
//         electionId: "df14c7c8-6a8b-4bb2-bf9a-6acfd13a2929",
//         choice_1_votes: 3,
//         choice_2_votes: 7,
//         current_public_votes: 10,
//         choice: "No",
//         agreement_rate: 70,
//       },
//       {
//         electionId: "dc4b1c79-2337-4f68-b6cf-35ea61f7a89d",
//         choice_1_votes: 0,
//         choice_2_votes: 8,
//         current_public_votes: 8,
//         choice: "No",
//         agreement_rate: 100,
//       },
//     ],
//   },
//   {
//     id: "660e8400-e29b-41d4-a716-446655440111",
//     name: "Taylor Smith",
//     email: "taylor.smith@example.com",
//     publicVotes: 5,
//     elections: [
//       {
//         electionId: "88b9c1b8-abe6-4b93-8197-bf25bf84364f",
//         choice_1_votes: 5,
//         choice_2_votes: 0,
//         current_public_votes: 5,
//         choice: "Yes",
//         agreement_rate: 100,
//       },
//       {
//         electionId: "3165d5b5-91fc-45df-97f0-6a9e02a3daaa",
//         choice_1_votes: 1,
//         choice_2_votes: 4,
//         current_public_votes: 5,
//         choice: "No",
//         agreement_rate: 80,
//       },
//       {
//         electionId: "ad931316-554e-4075-89e9-e0ce6b40f6eb",
//         choice_1_votes: 3,
//         choice_2_votes: 4,
//         current_public_votes: 7,
//         choice: "Yes",
//         agreement_rate: 57,
//       },
//       {
//         electionId: "a9985f84-bb9e-44f9-bd08-d87d70567e10",
//         choice_1_votes: 6,
//         choice_2_votes: 1,
//         current_public_votes: 7,
//         choice: "Yes",
//         agreement_rate: 86,
//       },
//       {
//         electionId: "e5c5fa2f-071b-46f8-baf8-3306f585c6fa",
//         choice_1_votes: 4,
//         choice_2_votes: 4,
//         current_public_votes: 8,
//         choice: "No",
//         agreement_rate: 50,
//       },
//       {
//         electionId: "df14c7c8-6a8b-4bb2-bf9a-6acfd13a2929",
//         choice_1_votes: 2,
//         choice_2_votes: 5,
//         current_public_votes: 7,
//         choice: "No",
//         agreement_rate: 71,
//       },
//       {
//         electionId: "dc4b1c79-2337-4f68-b6cf-35ea61f7a89d",
//         choice_1_votes: 0,
//         choice_2_votes: 5,
//         current_public_votes: 5,
//         choice: "No",
//         agreement_rate: 100,
//       },
//     ],
//   },
//   {
//     id: "770e8400-e29b-41d4-a716-446655440222",
//     name: "Jordan Lee",
//     email: "jordan.lee@example.com",
//     publicVotes: 23,
//     elections: [
//       {
//         electionId: "88b9c1b8-abe6-4b93-8197-bf25bf84364f",
//         choice_1_votes: 10,
//         choice_2_votes: 13,
//         current_public_votes: 23,
//         choice: "No",
//         agreement_rate: 57,
//       },
//       {
//         electionId: "3165d5b5-91fc-45df-97f0-6a9e02a3daaa",
//         choice_1_votes: 5,
//         choice_2_votes: 15,
//         current_public_votes: 20,
//         choice: "No",
//         agreement_rate: 75,
//       },
//       {
//         electionId: "ad931316-554e-4075-89e9-e0ce6b40f6eb",
//         choice_1_votes: 9,
//         choice_2_votes: 12,
//         current_public_votes: 21,
//         choice: "Yes",
//         agreement_rate: 43,
//       },
//       {
//         electionId: "a9985f84-bb9e-44f9-bd08-d87d70567e10",
//         choice_1_votes: 18,
//         choice_2_votes: 2,
//         current_public_votes: 20,
//         choice: "Yes",
//         agreement_rate: 90,
//       },
//       {
//         electionId: "e5c5fa2f-071b-46f8-baf8-3306f585c6fa",
//         choice_1_votes: 2,
//         choice_2_votes: 16,
//         current_public_votes: 18,
//         choice: "No",
//         agreement_rate: 89,
//       },
//       {
//         electionId: "df14c7c8-6a8b-4bb2-bf9a-6acfd13a2929",
//         choice_1_votes: 5,
//         choice_2_votes: 10,
//         current_public_votes: 15,
//         choice: "No",
//         agreement_rate: 67,
//       },
//     ],
//   },
//   {
//     id: "880e8400-e29b-41d4-a716-446655440333",
//     name: "Morgan Brown",
//     email: "morgan.brown@example.com",
//     publicVotes: 8,
//     elections: [
//       {
//         electionId: "88b9c1b8-abe6-4b93-8197-bf25bf84364f",
//         choice_1_votes: 6,
//         choice_2_votes: 2,
//         current_public_votes: 8,
//         choice: "Yes",
//         agreement_rate: 75,
//       },
//       {
//         electionId: "3165d5b5-91fc-45df-97f0-6a9e02a3daaa",
//         choice_1_votes: 3,
//         choice_2_votes: 3,
//         current_public_votes: 6,
//         choice: "Yes",
//         agreement_rate: 50,
//       },
//       {
//         electionId: "ad931316-554e-4075-89e9-e0ce6b40f6eb",
//         choice_1_votes: 3,
//         choice_2_votes: 1,
//         current_public_votes: 4,
//         choice: "Yes",
//         agreement_rate: 75,
//       },
//     ],
//   },
// ];

const publicUser = {
  id: "a3c6f123-4e4a-42b5-80d9-e6b0cd7f5a4f",
  repId: "880e8400-e29b-41d4-a716-446655440333",
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
