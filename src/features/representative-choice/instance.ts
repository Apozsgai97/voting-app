import { db } from "@/db";
import { createService } from "./service";


export const representativeService = createService(db);
