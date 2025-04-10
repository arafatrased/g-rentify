import ProductCard from "./ProductCard";

export default async function PopularProduct() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_LINK}/gadgets-for-home`
  );
  const gadgets = await data.json();

  return (
    <section className="py-14">
      <div className="container mx-auto px-3">
        {/* section title */}
        <h1 className="text-3xl font-semibold">Popular Gadgets</h1>
        <div className="w-full h-0.5 bg-gray-200 my-[13px]"></div>
        <div className="max-w-64 h-0.5 bg-[#03b00b] -mt-[15px] mb-10"></div>
        {/* main content here */}
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 md:gap-5 gap-10">
          {gadgets.map((item) => (
            <ProductCard item={item} key={item._id}></ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
}
