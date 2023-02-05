import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const playersRouter = createTRPCRouter({
  getOne: publicProcedure.input(z.string()).query(({ input, ctx }) => {
    return ctx.prisma.user.findFirst({
      where: {
        id: input,
      },
      include: {
        socials: true,
        badges: true,
        performances: true,
      },
    });
  }),

  getBatch: publicProcedure
    .input(z.object({ skip: z.number() }))
    .query(({ ctx, input }) => {
      const { skip } = input;
      return ctx.prisma.user.findMany({
        skip: skip,
        take: 120,
        orderBy: [
          {
            pts: "desc",
          },
        ],
      });
    }),

  getCount: publicProcedure.query(({ ctx }) => {
    const count = ctx.prisma.user.count();

    return count;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
