import Banner from "./components/Banner";

import RentCard from "./components/RentCard";
import PopularProduct from "./components/PopularProduct";
import Category from "./components/Category";
import SubBanner from "./components/SubBanner";

export default function Home() {
  return (
    <>
      <Banner />
      <Category />
      <SubBanner />
      <PopularProduct />
    </>
  );
}
