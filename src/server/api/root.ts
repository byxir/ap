import { createTRPCRouter } from "./trpc";
import { playersRouter } from "./routers/playersRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  players: playersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
