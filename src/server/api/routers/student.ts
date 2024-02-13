import { z } from "zod";

import {
  createTRPCRouter,
  // protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const studentRouter = createTRPCRouter({
  findMany: publicProcedure.query(async ({ ctx }) => {
    const students = await ctx.db.student.findMany({ orderBy: { id: "asc" } });
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

  //update student
  editStudent: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
        department: z.string(),
        gender: z.string(),
        category: z.string(),
        batch: z.number(),
        address: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const updateStudents = await ctx.db.student.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          department: input.department,
          gender: input.gender,
          category: input.category,
          batch: input.batch,
          address: input.address,
        },
      });
      return updateStudents;
    }),

  //prefill form with student data to edit
  getStudent: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const student = await ctx.db.student.findUnique({
        where: {
          id: input.id,
        },
      });
      return student;
    }),

  //delete student
  deleteStudent: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const deleteStudent = await ctx.db.student.delete({
        where: {
          id: input.id,
        },
      });
      return deleteStudent;
    }),
});
