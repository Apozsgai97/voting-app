"use server";

import { revalidatePath } from "next/cache";
import { representativeFeature } from "./instance";

export async function addRepresentative(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  await representativeFeature.service.addRepresentative(name, email);

  revalidatePath("/representatives");
}

export async function changeRepId(id: string) {
  await representativeFeature.service.changeRepIdForPublicUser(id);
  revalidatePath(`/representatives/${id}`);
}

export async function addToPublicVotes(id: string) {
  await representativeFeature.service.addToPublicVotes(id);
  revalidatePath(`/representatives/${id}`);
}

export async function takeFromPublicVotes(id: string) {
  await representativeFeature.service.takeFromPublicVotes(id);
  revalidatePath(`/representatives/${id}`);
}

export async function getRepresentativeById(id: string) {
  return await representativeFeature.service.getRepresentativeById(id);
}

export async function addToPublicPreference(
  id: string,
  electionId: string,
  choiceNumber: number
) {
  await representativeFeature.service.addToPublicPreference(
    id,
    electionId,
    choiceNumber
  );
  revalidatePath(`/elections/${id}`);
}
