import { z } from "zod";
import { AppError } from "../../core/errors/app-error";
import { SwipeInput } from "./swipe.types";

const swipeSchema = z.object({
  targetUserId: z
    .string({
      required_error: "targetUserId is required",
      invalid_type_error: "targetUserId must be a string",
    })
    .min(1, "targetUserId cannot be empty"),
  action: z.enum(["LIKE", "PASS"], {
    errorMap: () => ({ message: "Action must be either LIKE or PASS" }),
  }),
});

export function validateSwipeInput(payload: unknown): SwipeInput {
  const result = swipeSchema.safeParse(payload);
  if (!result.success) {
    const message = result.error.errors.map((e) => e.message).join(", ");
    throw new AppError(400, "VALIDATION_ERROR", message);
  }
  return result.data as SwipeInput;
}
