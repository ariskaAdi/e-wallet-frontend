import z from "zod";

export const topupSchema = z.object({
  amount: z.number().min(10000, "Amount must be greater than 10000"),
});

export type TopupSchema = z.infer<typeof topupSchema>;
