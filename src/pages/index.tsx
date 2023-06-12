import { type NextPage } from "next";
import Head from "next/head";
import { VscInfo } from "react-icons/vsc";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Předvídač</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="background">
        <h1>Předpověď známky</h1>
        <input type="number" id="znamka" className="number number1" min={1} max={5} placeholder="0" onChange={ReassuringZnamka()} />
        <p className="popisZnamka">Známka</p>
        <input type="number" id="vaha"  className="number number2" min={1} max={10} placeholder="0" onChange={ReassuringVaha()} />
        <p className="popisVaha">Váha</p>
        <button className="predvedetBtn">Předpovědět</button>
        <VscInfo className="info" /><p className="infoText">U známky napiš pouze číslo 1-5 a u váhy čísla 1-10</p>
      </main>
    </>
  );
};

const ReassuringZnamka = () => {
  return (e: any) => {
    if (e.target.value <= 5 && e.target.value >= 1) {
      console.log("Pass")
    }
    else {
      e.target.value = '';
      console.log("Failed, Please enter a number between 1-5")
    }
  }
}

const ReassuringVaha = () => {
  return (e: any) => {
    if (e.target.value <= 10 && e.target.value >= 1) {
      console.log("Pass")
    }
    else {
      e.target.value = '';
      console.log("Failed, Please enter a number between 1-5")
    }
  }
}

export default Home;
