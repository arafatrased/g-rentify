import Image from "next/image";

export default function SubBanner() {
  const products = [
    {
      name: "Latest Wireless Headphones",
      price: "$10.00",
      image: "https://i.ibb.co.com/SYtVK58/sub-banner-1.jpg",
    },
    {
      name: "Boat Wave Call Smart Watch",
      price: "$05.50",
      image: "https://i.ibb.co.com/NdTF4Qqn/sub-banner-2.jpg",
    },
    {
      name: "Motorola G64 5G 12GB",
      price: "$33.00",
      image: "https://i.ibb.co.com/ccbdQ949/sub-banner-3.jpg",
    },
  ];
  return (
    <section className="py-5">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <div key={index}>
              <div className="relative overflow-hidden rounded group">
                <Image
                  className="rounded group-hover:scale-110 transition-transform duration-500 w-full"
                  src={product.image}
                  width={500}
                  height={240}
                  alt="Img"
                  priority={true}
                />
                <div className="grid grid-cols-2 absolute top-[50%] translate-y-[-50%] right-4 sm:right-8 xl:right-2">
                  <div></div>
                  <div className="flex flex-col gap-2 text-white w-full">
                    <h1 className="text-2xl 2xl:text-3xl">{product.name}</h1>
                    <p className="text-lg">
                      From :
                      <span className="text-3xl font-semibold">
                        {product.price}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
