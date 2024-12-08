"use server";

import { revalidatePath } from "next/cache";
import { representativeService } from "./instance";

export async function addRepresentative(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  await representativeService.addRepresentative(name, email);

  revalidatePath("/representatives");
}

export async function changeRepId(id: string) {
  await representativeService.changeRepIdForPublicUser(id);
  revalidatePath(`/representatives/${id}`);
}

export async function addToPublicVotes(id: string) {
  await representativeService.addToPublicVotes(id);
  revalidatePath(`/representatives/${id}`);
}

export async function takeFromPublicVotes(id: string) {
  await representativeService.takeFromPublicVotes(id);
  revalidatePath(`/representatives/${id}`);
}

export async function addToPublicPreference(
  id: string,
  electionId: string,
  choiceNumber: number
) {
  await representativeService.addToPublicPreference(
    id,
    electionId,
    choiceNumber
  );
  revalidatePath(`/elections/${id}`);
}
