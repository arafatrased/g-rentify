import ProductCard from "./ProductCard";

export default function PopularProduct() {
  const data = [
    {
      image:
        "https://i.ibb.co.com/sp8ydvLv/H5b68e85d72394e31b07e9bd664e0406a-M-jpg-720x720q50.png",
      category: "Electronics",
      title: "High-Quality Wireless Earbuds with Mic",
      rating: 4.5,
      price: 39.99,
    },
    {
      image:
        "https://i.ibb.co.com/Q7v6Cn8p/H8c3259ae9424447dbb9f43514c0dff30w-jpg-720x720q50.png",
      category: "Accessories",
      title: "Advanced Smartwatch with Fitness Tracker",
      rating: 4.7,
      price: 59.99,
    },
    {
      image:
        "https://i.ibb.co.com/fYJpG2mM/H9c4d103d84464866bc8df1a8417488a03-jpg-720x720q50.png",
      category: "Gaming",
      title: "RGB Mechanical Keyboard for Gamers",
      rating: 4.6,
      price: 79.99,
    },
    {
      image:
        "https://i.ibb.co.com/231HVzYH/H040c4ebe9d0a40f9be3403597e1332bb2-jpg-720x720q50.png",
      category: "Computers",
      title: "Ergonomic Gaming Mouse with RGB Lights",
      rating: 4.8,
      price: 49.99,
    },
    {
      image:
        "https://i.ibb.co.com/yc31VMs2/H307d2ab304da4e15b0fb45d4f16f64f9-L-jpg-720x720q50.png",
      category: "Audio",
      title: "Portable Bluetooth Speaker with Deep Bass",
      rating: 4.4,
      price: 29.99,
    },
    {
      image:
        "https://i.ibb.co.com/FkfhkxMT/H7897f47494e04d7b9014899f29963bb3-Q-jpg-720x720q50.png",
      category: "Mobile Accessories",
      title: "Compact Portable Power Bank for Phones",
      rating: 4.3,
      price: 25.99,
    },
  ];

  return (
    <section className="py-14">
      <div className="container mx-auto px-3">
        {/* section title */}
        <h1 className="text-3xl font-semibold">Popular Products</h1>
        <div className="w-full h-0.5 bg-gray-200 my-[13px]"></div>
        <div className="max-w-64 h-0.5 bg-[#03b00b] -mt-[15px] mb-10"></div>
        {/* main content here */}
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 md:gap-5 gap-10">
          {data.map((item, idx) => (
            <ProductCard item={item} key={idx}></ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
}
