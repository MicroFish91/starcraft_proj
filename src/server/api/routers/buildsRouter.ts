import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { MATCHUPS } from "../../../constants";

export const buildsRouter = createTRPCRouter({
  getBuilds: publicProcedure.query(async ({ ctx }) => {
    const builds = await ctx.prisma.buildOrder.findMany();
    return builds;
  }),
  createBuild: publicProcedure
    .input(
      z.object({
        matchup: z.enum(MATCHUPS),
        build: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const build = await ctx.prisma.buildOrder.create({
        data: {
          ...input,
        },
      });
      return build;
    }),
});
