import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import PageSectionContainer from "../components/PageSectionContainer/PageSectionContainer";

const contact: NextPage = () => {
  return (
    <PageSectionContainer>
      <Head>
        <title>Content - Christopher Ehrlich</title>
        <meta
          name="description"
          content="Christopher Ehrlich Developer Portfolio - Contact"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>👋 You can contact me at:</h1>
      <ul>
        <li>
          <Link href="mailto:ehrlich.christopher@gmail.com">Email</Link>
        </li>
        <li>
          <Link href="https://github.com/c-ehrlich">GitHub</Link>
        </li>
        <li>
          <Link href="https://discordapp.com/channels/@me/190543707592720384">
            Discord (cje#1138)
          </Link>
        </li>
      </ul>
    </PageSectionContainer>
  );
};

export default contact;
