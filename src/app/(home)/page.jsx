import Banner from "./components/Banner";
import PopularProduct from "./components/PopularProduct";
import Category from "./components/Category";

export default function Home() {
  return (
    <>
      <Banner />
      <Category />
      <PopularProduct />
    </>
  );
}
