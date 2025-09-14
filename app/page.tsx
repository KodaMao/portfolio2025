import Head from "next/head";
import Header from "./components/header";
import Hero from "./components/hero";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leonel Felezario - Portfolio</title>
        <meta name="description" content="Full Stack Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Contact />
      </main>
    </>
  );
}
