import { type NextPage } from "next";
import { useState } from "react";
import { api } from "../utils/api";
import { MATCHUPS } from "../constants";
import { useRouter } from "next/router";
import Head from "next/head";

type MatchupsUnion = (typeof MATCHUPS)[number];

const AddBuildPage: NextPage = () => {
  const createBuildMutation = api.builds.createBuild.useMutation();
  const router = useRouter();

  const [matchup, setMatchup] = useState<MatchupsUnion>("zvz");
  const [build, setBuild] = useState("");

  async function handleSubmitBuildOrder(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    await createBuildMutation.mutateAsync({
      matchup,
      build,
    });
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a Build</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <form className="flex flex-col gap-4" onSubmit={handleSubmitBuildOrder}>
          <label htmlFor="match-up-select">Match Up</label>
          <select
            className=" text-black"
            id="match-up-select"
            value={matchup}
            onChange={(e) => setMatchup(e.target.value as MatchupsUnion)}
            required
          >
            <option value="zvz">ZvZ</option>
            <option value="zvt">ZvT</option>
            <option value="zvp">ZvP</option>
            <option value="tvz">TvZ</option>
            <option value="tvt">TvT</option>
            <option value="tvp">TvP</option>
            <option value="pvz">PvZ</option>
            <option value="pvt">PvT</option>
            <option value="pvp">PvP</option>
          </select>

          <textarea className="p-2 text-black" value={build} onChange={(e) => setBuild(e.target.value)} required />

          <button className="bg-white p-2 text-black">Submit</button>
        </form>
      </main>
    </>
  );
};

export default AddBuildPage;
