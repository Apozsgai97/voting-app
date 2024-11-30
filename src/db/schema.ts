import { integer, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const elections = pgTable("elections", {
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