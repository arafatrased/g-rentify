import Button from "../components/Button";
import Link from "next/link";
import Image from "next/image";

export default async function GadgetPage() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LINK}/gadgets`);
  const gadgets = await data.json();
  console.log(gadgets);

  return (
    <main className="pt-8 pb-14">
      <div className="container mx-auto px-3">
        {/* Breadcrumb */}
        <div className="breadcrumbs text-sm mb-6">
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link className="text-[#03b00b]" href={"/gadgets"}>
                Gadgets
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-10">
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-3">
            {/* Search Box */}
            <div className="border border-[#e3e3e3] rounded p-2 bg-[#F5F5F5] mb-5">
              <form>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="By Title"
                  className="border border-[#e3e3e3] rounded outline-none px-3 w-full mt-1 py-2 focus:border-[#03b00b] transition-colors duration-300 mb-3 bg-white hover:border-[#aaa]"
                />
                <Button buttonText={"Search"}></Button>
              </form>
            </div>
            {/* featured 4 item */}
            {/* <div className="grid grid-cols-2 gap-5">
              <div className="border border-green-500 w-full h-28">
                featured product item
              </div>
              <div className="border border-green-500 w-full h-28">
                featured product item
              </div>
              <div className="border border-green-500 w-full h-28">
                featured product item
              </div>
              <div className="border border-green-500 w-full h-28">
                featured product item
              </div>
            </div> */}
          </div>

          {/* all Gadgets */}
          <div className="col-span-12 lg:col-span-9">
            {/* Product Title bar*/}
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-semibold">Filters Rental</h3>
              <div className="flex gap-2 items-center w-60">
                <p className="text-[#17080c] font-medium w-[80px]">Sort by: </p>
                <select
                  defaultValue="Pick a color"
                  className="select border p-2 border-gray-200 focus:border-[#03b00b] focus:outline-none"
                >
                  <option disabled={true}>Select Categorys</option>
                  <option>Default</option>
                  <option>Name</option>
                  <option>Price: low to high</option>
                  <option>Price: high to low</option>
                </select>
              </div>
            </div>

            {/* Gadgets card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {gadgets.map((item) => (
                <div key={item._id} className="group">
                  <div className="w-full border border-gray-200 rounded mb-2 p-2">
                    <Image
                      src={item?.images[0]}
                      width={720}
                      height={720}
                      alt={item?.title}
                      priority={true}
                      className="max-w-[150px] lg:max-w-[200px] mx-auto"
                    />
                  </div>
                  <p className="text-gray-500">{item?.category?.label}</p>
                  <Link href={`/gadgets/${item?._id}`}>
                    <h3 className="font-semibold text-[#17080c] hover:text-[#00B22C] duration-300 cursor-pointer">
                      {item?.title?.substring(0, 62)}
                    </h3>
                  </Link>
                  <p className="font-medium text-[#03b00b] mb-2">
                    $ {item?.price || "N/A"}
                  </p>
                  <Link
                    href={`/gadgets/${item?._id}`}
                    className="opacity-0 -translate-y-5 table group-hover:opacity-100 group-hover:translate-y-0 duration-500"
                  >
                    <Button buttonText={"Options"}></Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
