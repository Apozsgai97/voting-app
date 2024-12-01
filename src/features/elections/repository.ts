import { db } from "@/db/index";
import { electionsTable } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { ElectionData } from "./types";

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
      await db.update(electionsTable).set({
        choice1_result: result1,
        choice2_result: result2,
        status:"closed"
      }).where(eq(electionsTable.id, id))
    },
  };
}
export type Repository = ReturnType<typeof createElectionRepository>;
