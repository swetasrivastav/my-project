import Head from "next/head";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>MyCaptur</title>
      </Head>
      <Hero />
      <Slider />
      <Instagram />
    </>
  );
}
