import { integer, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const electionsTable = pgTable("elections", {
  id: uuid("id").primaryKey().defaultRandom(),
  issue: text("issue").notNull(),
  choice1_name: text("choice1_name").notNull(),
  choice1_votes: integer("choice1_votes").default(0),
  choice1_result: varchar("choice1_result", { length: 255 }).notNull(),
  choice2_name: text("choice2_name").notNull(),
  choice2_votes: integer("choice2_votes").default(0),
  choice2_result: varchar("choice2_result", { length: 255 }).notNull(),
  status: varchar("status", { length: 255 }).notNull(),
  publish_date: varchar("publish_date", { length: 255 }).notNull(),
});

export const representativesTable = pgTable("representatives", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  publicVotes: integer("public_votes").default(0).notNull(),
});

export const electionVotesTable = pgTable("election votes", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  representativeId: uuid("representative_id")
    .notNull()
    .references(() => representativesTable.id),
  electionId: uuid("election_id").notNull(),
  choice1Votes: integer("choice_1_votes").notNull(),
  choice2Votes: integer("choice_2_votes").notNull(),
  currentPublicVotes: integer("current_public_votes").notNull(),
  choice: varchar("choice", { length: 255 }).notNull(),
  agreementRate: integer("agreement_rate").notNull(),
});
