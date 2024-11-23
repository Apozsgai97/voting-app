"use server"

import { revalidatePath } from "next/cache";
import { representativeFeature } from "./instance";

export async function addRepresentative(formData: FormData) {
 const name = formData.get("name") as string;
 const email = formData.get("email") as string;

 await representativeFeature.service.addRepresentative(name, email)

 revalidatePath("/representatives");
 
}