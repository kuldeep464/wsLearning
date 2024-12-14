import Image from "next/image";
import Banner from "./HomeComponent/Banner";
import Categories from "./HomeComponent/Categories";
import EnjoyfortyPer from "./HomeComponent/EnjoyfortyPer";
import WinterJackets from "./HomeComponent/WinterJackets";
import GoodLiving from "./HomeComponent/GoodLiving";

export default function Home() {
  return (
    <>
      <Banner/>
      <Categories/>
      {/* <EnjoyfortyPer/> */}
      <WinterJackets/>
      <GoodLiving/>
    </>
  );
}
