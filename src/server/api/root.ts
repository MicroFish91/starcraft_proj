import { buildsRouter } from "./routers/buildsRouter";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  builds: buildsRouter,
});

export type AppRouter = typeof appRouter;
