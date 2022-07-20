import Head from "next/head";
import RegisterContent from "@contents/auth/register-content";

export default function Register() {
  return (
    <>
      <Head>
        <title>DUNA | LOGIN</title>
        <meta name="description" content="Register on DUNA platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RegisterContent />
    </>
  );
}
