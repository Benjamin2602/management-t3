import { z } from "zod";

import {
  createTRPCRouter,
  // protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const studentRouter = createTRPCRouter({
  findMany: publicProcedure.query(async ({ ctx }) => {
    const students = await ctx.db.student.findMany({});
    return students;
  }),

  createStudent: publicProcedure
    .input(
      z.object({
        name: z.string(),
        department: z.string(),
        gender: z.string(),
        category: z.string(),
        batch: z.number(),
        address: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const students = await ctx.db.student.create({
        data: {
          name: input.name,
          department: input.department,
          gender: input.gender,
          category: input.category,
          batch: input.batch,
          address: input.address,
        },
      });
      return students;
    }),
});
