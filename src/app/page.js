import Banner from "./components/Banner";

import RentCard from "./components/RentCard";
import PopularProduct from "./components/PopularProduct";
import Category from "./components/Category";
import SubBanner from "./components/SubBanner";

export default function Home() {
  return (
    <>
      <Banner />

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-bold text-center">
          Rent Your Gadgets, Go Big, Fly Higher
        </h1>
        <RentCard />
      </div>
      <Category />
      <SubBanner />
      <PopularProduct />
    </>
  );
}
