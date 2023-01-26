import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const playersRouter = createTRPCRouter({
  getOne: publicProcedure.input(z.string()).query(({ input, ctx }) => {
    return ctx.prisma.user.findFirst({
      where: {
        id: input,
      },
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
