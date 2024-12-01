import { z } from "zod";

export const NameSchema = z
  .string()
  .min(1, { message: "This field has to be filled." });

export const EmailSchema = z
  .string()
  .min(1, { message: "This field has to be filled." })
  .email("This is not a valid email.");
