"use server"

import { revalidatePath } from "next/cache";
import { electionFeature } from "./instance";

export async function addElection(formData: FormData) {
  const issue = formData.get("issue") as string;
  const choice1 = formData.get("choice1") as string;
   const choice2 = formData.get("choice2") as string;

  await electionFeature.service.addElection(issue, choice1, choice2)

  revalidatePath("/elections");
}

export async function closeAndCalculateVoteResult(id: string) {
 await electionFeature.service.calculateVoteResult(id)
  revalidatePath(`/elections/${id}`);
}

