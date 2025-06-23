import { FaRegSmileBeam } from "react-icons/fa";
import { CiCreditCard2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { BsUmbrella } from "react-icons/bs";

export default function GrentifyStats() {
  const features = [
    {
      icon: <FaRegSmileBeam className="text-[#03b00b] w-8 h-8" />,
      title: "500,000+ customers",
    },
    {
      icon: <CiCreditCard2 className="text-[#03b00b] w-8 h-8" />,
      title: "Low monthly costs",
    },
    {
      icon: <SlCalender className="text-[#03b00b] w-8 h-8" />,
      title: "Rent from 1 to 24+ months",
    },
    {
      icon: <BsUmbrella className="text-[#03b00b] w-8 h-8" />,
      title: "Grentify Care included",
    },
  ];

  return (
    <section className="bg-white py-6 border-t border-b border-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center items-center">
        {features.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            {item.icon}
            <p className="text-sm text-gray-800">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
