import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import PageSectionContainer from "../components/PageSectionContainer/PageSectionContainer";
import { generateRssFeed } from "../lib/rssUtils";

const Home: NextPage = () => {
  return (
    <PageSectionContainer>
      <Head>
        <title>Christopher Ehrlich</title>
        <meta
          name="description"
          content="Christopher Ehrlich Developer Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>A quick intro</h1>
      <p>
        After Graduating from Central St Martins I worked for designers such as{" "}
        <Link href="https://aitorthroup.com/">Aitor Throup</Link> and{" "}
        <Link href="https://www.janjanvanessche.com/">Jan-Jan van Essche</Link>,
        and then became a lecturer at the{" "}
        <Link href="https://www.ufg.at/">
          University of Art and Design in Linz
        </Link>
        .
      </p>
      <p>
        During the Coronavirus pandemic I rediscovered my childhood interest in
        programming, and started teaching myself Full Stack development.
      </p>
      <p>
        I currently work for <Link href="https://www.kompany.at">kompany</Link>,
        a subsidiary of <Link href="https://www.moodys.com/">Moody&apos;s</Link>
        .
      </p>
      <p>
        Outside of work, I am passionate about creating tools, teaching,
        language learning, and clothesmaking.
      </p>
    </PageSectionContainer>
  );
};

/**
 * Create the RSS feed on build
 */
export const getStaticProps = async () => {
  await generateRssFeed();

  return { props: {} };
};

export default Home;
