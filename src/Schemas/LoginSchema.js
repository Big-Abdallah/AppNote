import * as zod from "zod";

export const Loginschema = zod.object({
  email: zod.string().email("Invalid email format"),

  password: zod
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])/, "Password must contain a lowercase letter")
    .regex(/^(?=.*[A-Z])/, "Password must contain an uppercase letter")
    .regex(/^(?=.*\d)/, "Password must contain a number")
    .regex(/^(?=.*[@$!%*?&])/, "Password must contain a special character"),
});
  