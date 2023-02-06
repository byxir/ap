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
    .input(
      z.object({
        skip: z.number(),
        keywords: z.string(),
        sortMethod: z.number(),
      })
    )
    .query(({ ctx, input }) => {
      const { skip } = input;
      const { keywords } = input;
      const { sortMethod } = input;

      if (sortMethod === 3) {
        return ctx.prisma.user.findMany({
          skip: skip,
          take: 120,
          orderBy: [
            {
              totalKills: "desc",
            },
          ],
          where: {
            name: {
              contains: keywords,
            },
          },
        });
      } else if (sortMethod === 2) {
        return ctx.prisma.user.findMany({
          skip: skip,
          take: 120,
          orderBy: [
            {
              kd: "desc",
            },
          ],
          where: {
            name: {
              contains: keywords,
            },
          },
        });
      } else {
        return ctx.prisma.user.findMany({
          skip: skip,
          take: 120,
          orderBy: [
            {
              pts: "desc",
            },
          ],
          where: {
            name: {
              contains: keywords,
            },
          },
        });
      }
    }),

  getByKeyword: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.user.findMany({
      where: {
        name: {
          contains: input,
        },
      },
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
