import Image from "next/image";
import icon1 from "../../../images/rent-safely-icon/i2.png";
import icon2 from "../../../images/rent-safely-icon/i1.png";
import icon3 from "../../../images/rent-safely-icon/i3.png";
import icon4 from "../../../images/rent-safely-icon/i4.png";

export default function RentSafley() {
  const items = [
    {
      image: icon1,
      title: "New or high-quality tech devices",
      desc: "With Quality Check",
    },
    {
      image: icon2,
      title: "Damage protection",
      desc: "Up to 90% is covered",
    },
    {
      image: icon3,
      title: "No hidden costs",
      desc: "You only pay for what you see",
    },
    {
      image: icon4,
      title: "True top models",
      desc: "Original & latest technology",
    },
  ];

  return (
    <section className="bg-white py-12 text-center">
      <div className="container mx-auto px-4">
        {/* section title */}
        <h1 className="text-3xl text-start font-semibold text-gray-800">
          Rent safely with Grentify
        </h1>
        <div className="w-full h-0.5 bg-gray-200 my-[13px]"></div>
        <div className="max-w-64 xl:max-w-1/4 h-0.5 bg-[#03b00b] -mt-[15px] mb-10"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.image}
                alt={item.title}
                className="w-20 h-20 mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
