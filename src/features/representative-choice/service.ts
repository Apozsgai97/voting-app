import { z } from "zod";
import { Repository, Representative } from "./repository";
import { v4 as uuidv4 } from "uuid";

const NameSchema = z
  .string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  })
  .min(1, { message: "This field has to be filled." });

const EmailSchema = z
  .string()
  .min(1, { message: "This field has to be filled." })
  .email("This is not a valid email.");

export function createService(repository: Repository) {
  return {
    async getAllRepresentatives() {
      return await repository.getAllRepresentatives();
    },
    async addRepresentative(name: string, email: string) {
      const validatedName = NameSchema.safeParse(name);
      const validatedEmail = EmailSchema.safeParse(email);
      const id = uuidv4();

      if (!validatedName.success || !validatedEmail.success) {
        return {
          message: "Please provide a valid name and email.",
        };
      }

      const representative: Representative = {
        id: id,
        name: validatedName.data,
        email: validatedEmail.data,
      };

      repository.addRepresentative(representative);
    },
  };
}
