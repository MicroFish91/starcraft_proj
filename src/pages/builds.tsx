import { type NextPage } from "next";
import { api } from "../utils/api";
import Head from "next/head";
import Link from "next/link";

const SubmitBuildPage: NextPage = () => {
  const builds = api.builds.getBuilds.useQuery();

  return (
    <>
      <Head>
        <title>Starcraft 2 Builds</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1>Starcraft 2 Builds</h1>

        <Link href="/">Home</Link>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Matchup</th>
              <th>Build</th>
            </tr>
          </thead>
          <tbody>
            {builds.data?.map((b) => {
              return (
                <tr key={b.id}>
                  <td>{b.id}</td>
                  <td>{b.matchup}</td>
                  <td>{b.build}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default SubmitBuildPage;
