import { config } from "dotenv";
import { Pool } from "pg";
import {
  electionsTable,
  representativesTable,
  electionVotesTable,
} from "./schema";
import { drizzle } from "drizzle-orm/node-postgres";

config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

console.log("Database URL:", process.env.DATABASE_URL);

async function seedData() {
  try {
    const representatives = [
      {
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        publicVotes: 10,
      },
      {
        name: "Taylor Smith",
        email: "taylor.smith@example.com",
        publicVotes: 10,
      },
      { name: "Jordan Lee", email: "jordan.lee@example.com", publicVotes: 12 },
    ];
    const representativeRecords = await db
      .insert(representativesTable)
      .values(representatives)
      .returning({ id: representativesTable.id });

    const elections = [
      {
        issue: "Should we implement universal basic income (UBI)?",
        choice1_name: "Yes",
        choice1_result: "Pending",
        choice2_name: "No",
        choice2_result: "Pending",
        status: "ongoing",
        publish_date: new Date().toISOString(),
      },
      {
        issue:
          "Should the country adopt renewable energy as the primary power source?",
        choice1_name: "Yes",
        choice1_votes: 10,
        choice1_result: "Lose",
        choice2_name: "No",
        choice2_votes: 22,
        choice2_result: "Win",
        status: "closed",
        publish_date: "2024-08-11T09:00:00.000Z",
      },
      {
        issue: "Should we ban single-use plastics?",
        choice1_name: "Yes",
        choice1_votes: 22,
        choice1_result: "Win",
        choice2_name: "No",
        choice2_votes: 10,
        choice2_result: "Lose",
        status: "closed",
        publish_date: "2024-04-29T17:00:00.000Z",
      },
    ];
    const electionRecords = await db
      .insert(electionsTable)
      .values(elections)
      .returning({ id: electionsTable.id });

    const electionVotes = [
      {
        representativeId: representativeRecords[0].id,
        electionId: electionRecords[1].id,
        choice1Votes: 4,
        choice2Votes: 6,
        currentPublicVotes: 10,
        choice: "No",
        agreementRate: 60,
      },
      {
        representativeId: representativeRecords[1].id,
        electionId: electionRecords[1].id,
        choice1Votes: 6,
        choice2Votes: 4,
        currentPublicVotes: 10,
        choice: "Yes",
        agreementRate: 60,
      },
      {
        representativeId: representativeRecords[2].id,
        electionId: electionRecords[1].id,
        choice1Votes: 0,
        choice2Votes: 12,
        currentPublicVotes: 12,
        choice: "No",
        agreementRate: 100,
      },

      {
        representativeId: representativeRecords[0].id,
        electionId: electionRecords[2].id,
        choice1Votes: 8,
        choice2Votes: 2,
        currentPublicVotes: 10,
        choice: "Yes",
        agreementRate: 80,
      },
      {
        representativeId: representativeRecords[1].id,
        electionId: electionRecords[2].id,
        choice1Votes: 4,
        choice2Votes: 6,
        currentPublicVotes: 10,
        choice: "No",
        agreementRate: 60,
      },
      {
        representativeId: representativeRecords[2].id,
        electionId: electionRecords[2].id,
        choice1Votes: 9,
        choice2Votes: 3,
        currentPublicVotes: 12,
        choice: "Yes",
        agreementRate: 75,
      },
    ];
    await db.insert(electionVotesTable).values(electionVotes);

    console.log("Data seeded successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    process.exit(0);
  }
}

seedData();
