import Head from "next/head";
import Pitch from "@contents/pitch/pitch";

export default function PitchPage() {
  return (
    <>
      <Head>
        <title>DUNA - PITCH DECK</title>
        <meta name="description" content="pitch deck" />
      </Head>
      <Pitch />
    </>
  );
}
