"use client"
import Button from '@/app/(home)/components/Button';
import Image from 'next/image';
import Link from 'next/link';


const TestData = ({data}) => {
    console.log(data);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {data.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="w-full border border-gray-200 rounded mb-2 p-2">
                    <Image
                      src={item?.images[0].image_link1 || "/placeholder.jpg"}
                      width={720}
                      height={720}
                      alt={item?.title || "Product Image"}
                      className="max-w-[150px] lg:max-w-[200px] mx-auto"
                      priority={true}
                    />
                  </div>
                  <p className="text-gray-500">
                    {item?.category || "No Category"}
                  </p>
                  <h3 className="font-semibold text-[#17080c] hover:text-[#00B22C] duration-300 cursor-pointer">
                    {item?.title?.substring(0, 62) || "No Title"}
                  </h3>
                  <p className="font-medium text-[#03b00b] mb-2">
                    $ {item?.price || "N/A"}
                  </p>
                  <Link
                    href={`/gadgets/${"productId"}`}
                    className="opacity-0 -translate-y-5 table group-hover:opacity-100 group-hover:translate-y-0 duration-500"
                  >
                    <Button buttonText={"Options"}></Button>
                  </Link>
                </div>
              ))}
            </div>
    );
};

export default TestData;