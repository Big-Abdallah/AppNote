import * as zod from "zod";

export const schema = zod.object({
  name: zod
    .string()
    .nonempty("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be at most 20 characters"),

  email: zod.string().email("Invalid email format"),

  password: zod
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])/, "Password must contain a lowercase letter")
    .regex(/^(?=.*[A-Z])/, "Password must contain an uppercase letter")
    .regex(/^(?=.*\d)/, "Password must contain a number")
    .regex(/^(?=.*[@$!%*?&])/, "Password must contain a special character"),

  age: zod
    .string()
    .nonempty("Age is required")
    .regex(/^\d+$/, "Age must be a number")
    .refine((val) => parseInt(val) >= 18, {
      message: "You must be at least 18 years old 👼",
    }),

  phone: zod
    .string()
    .nonempty("Phone number is required")
    .regex(/^[0-9]{10,15}$/, "Phone must be 10 to 15 digits"),
});
