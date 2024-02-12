import {z} from "zod";

import {
    createTRPCRouter,
    // protectedProcedure,
    publicProcedure,
  } from "@/server/api/trpc";

  export const studentRouter = createTRPCRouter({
    findMany: publicProcedure.query(async ({ ctx }) => {
      const students = await ctx.db.student.findMany({
      });
      return students;
    }),
});