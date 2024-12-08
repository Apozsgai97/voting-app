import { db } from "@/db";
import { createService } from "./service";
import { representativeService } from "../representative-choice";

export const electionService = createService(db, representativeService.getRepresentativesAndVotes)
