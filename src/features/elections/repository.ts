import { db } from "@/db/index";
import { electionsTable } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

const elections = [
  {
    id: "88b9c1b8-abe6-4b93-8197-bf25bf84364f",
    issue: "Should we implement universal basic income (UBI)?",
    choice_1: {
      name: "Yes",
      votes: 10,
      result: "Pending",
    },
    choice_2: {
      name: "No",
      votes: 0,
      result: "Pending",
    },
    status: "ongoing",
    publish_date: "2024-11-20T11:00:00.000Z",
  },
  {
    id: "3165d5b5-91fc-45df-97f0-6a9e02a3daaa",
    issue:
      "Should the country adopt renewable energy as the primary power source?",
    choice_1: {
      name: "Yes",
      votes: 6,
      result: "Lose",
    },
    choice_2: {
      name: "No",
      votes: 37,
      result: "Win",
    },
    status: "closed",
    publish_date: "2024-08-11T09:00:00.000Z",
  },
  {
    id: "ad931316-554e-4075-89e9-e0ce6b40f6eb",
    issue: "Should we ban single-use plastics?",
    choice_1: {
      name: "Yes",
      votes: 32,
      result: "Win",
    },
    choice_2: {
      name: "No",
      votes: 12,
      result: "Lose",
    },
    status: "closed",
    publish_date: "2024-04-29T17:00:00.000Z",
  },
  {
    id: "a9985f84-bb9e-44f9-bd08-d87d70567e10",
    issue: "Should we extend paid family leave to 2 years?",
    choice_1: {
      name: "Yes",
      votes: 38,
      result: "Win",
    },
    choice_2: {
      name: "No",
      votes: 0,
      result: "Lose",
    },
    status: "closed",
    publish_date: "2023-07-02T00:00:00.000Z",
  },
  {
    id: "e5c5fa2f-071b-46f8-baf8-3306f585c6fa",
    issue: "Should we increase the legal smoking age to 21?",
    choice_1: {
      name: "Yes",
      votes: 0,
      result: "Lose",
    },
    choice_2: {
      name: "No",
      votes: 36,
      result: "Win",
    },
    status: "closed",
    publish_date: "2022-03-28T06:00:00.000Z",
  },
  {
    id: "df14c7c8-6a8b-4bb2-bf9a-6acfd13a2929",
    issue: "Should we provide free public transportation in all major cities?",
    choice_1: {
      name: "Yes",
      votes: 0,
      result: "Lose",
    },
    choice_2: {
      name: "No",
      votes: 32,
      result: "Win",
    },
    status: "closed",
    publish_date: "2021-08-19T12:00:00.000Z",
  },
  {
    id: "dc4b1c79-2337-4f68-b6cf-35ea61f7a89d",
    issue: "Should we implement mandatory voting?",
    choice_1: {
      name: "Yes",
      votes: 0,
      result: "Lose",
    },
    choice_2: {
      name: "No",
      votes: 13,
      result: "Win",
    },
    status: "closed",
    publish_date: "2020-11-05T01:00:00.000Z",
  },
];

export type Election = {
  id: string;
  issue: string;
  choice1_name: string;
  choice1_votes: number | null ;
  choice1_result: string;
  choice2_name: string;
  choice2_votes: number | null;
  choice2_result: string;
  status: string;
  publish_date: string;
};
export type ElectionData = {
  issue: string;
  choice1_name: string;
  choice1_votes: number;
  choice1_result: string;
  choice2_name: string;
  choice2_votes: number;
  choice2_result: string;
  status: string;
  publish_date: string;
};

export function createElectionRepository() {
  return {
    async getAllElections() {
      return await db
        .select()
        .from(electionsTable)
        .orderBy(desc(electionsTable.publish_date));
    },
    async addElection(election: ElectionData) {
      await db.insert(electionsTable).values(election);
    },
    async getElectionById(id: string) {
      const election = await db
        .select()
        .from(electionsTable)
        .where(eq(electionsTable.id, id));
      return election[0];
    },
    async changeVoteResult(result1: string, result2: string, id: string) {
      const election = elections.find((election) => id === election.id);
      election!.choice_1.result = result1;
      election!.choice_2.result = result2;
      election!.status = "closed";
    },
  };
}
export type Repository = ReturnType<typeof createElectionRepository>;
