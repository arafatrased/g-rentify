"use client";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
import imageUrl from "@/lib/makeImageUrl";
import { useRouter } from "next/navigation";


export default function MyAccount() {
  const router = useRouter();
  const session = useSession();
  const name = session?.data?.user?.name;
  const email = session?.data?.user?.email;
  const [activeTab, setActiveTab] = useState("dashboard");
  // const [location, setLocation] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [names, setNames] = useState("");
  const [user, setUser] = useState(null);

   const handleSubmitUpdate = async(e) => {
          e.preventDefault();

          const govtId = await imageUrl(selectedImage);
          const payload = {
            email,
            name:names,
            phone,
            address,
            bio,
            govtId,
            role: "lender" 
          }

          console.log(payload);
          try {
            const res = await fetch("/api/auth/profile-update", {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, name:names, address, govtId, phone, bio, role: "lender" })
            });
      
            if (res.ok) {
              alert("Role updated Successfully!");
              signOut({ callbackUrl: "/login" });
              router.push("/login");

            } else {
              alert("Failed to update profile.");
            }
          } catch (err) {
            console.error(err);
            alert("Something went wrong.");
          }
          
      }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // get location
  // useEffect(() => {
  //   const fetchUserLocation = async () => {
  //     try {
  //       const res = await fetch(
  //         `${process.env.NEXT_PUBLIC_SERVER_LINK}/api/location`
  //       );
  //       const data = await res.json();
  //       setLocation(data);
  //     } catch (error) {
  //       console.error("Failed to fetch location:", error);
  //     }
  //   };
  //   fetchUserLocation();
  // }, []);

  // get user

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/auth/profile-update?email=${email}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [email]);

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="border border-gray-200 rounded shadow-sm">
              <div className="bg-[#03b00b] text-white px-4 py-3 font-semibold text-center lg:text-left">
                MY ACCOUNT
              </div>
              <div className="divide">
                <button
                  className={`w-full text-left px-4 py-3 text-sm sm:text-base cursor-pointer ${activeTab === "dashboard" ? "bg-gray-100" : ""
                    }`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  Account Dashboard
                </button>
                <button
                  className={`w-full text-left px-4 py-3 text-sm sm:text-base cursor-pointer ${activeTab === "orders" ? "bg-gray-100" : ""
                    }`}
                  onClick={() => setActiveTab("orders")}
                >
                  My Orders
                </button>
                <button
                  className={`w-full text-left px-4 py-3 text-sm sm:text-base cursor-pointer ${activeTab === "apply" ? "bg-gray-100" : ""
                    }`}
                  onClick={() => setActiveTab("apply")}
                >
                  Become a Lender
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 space-y-6 min-h-[600px]">
            {activeTab === "dashboard" && (
              <>
                {/* Account Info */}
                <div className="border border-gray-200 rounded shadow-sm">
                  <div className="bg-[#03b00b] text-white px-4 py-3 font-semibold">
                    Account Information
                  </div>
                  <div className="p-4 space-y-2 text-sm sm:text-base">
                    <p className="font-medium">
                      <span>Name: </span> {name}
                    </p>
                    <p>
                      <span>Email: </span> {email}
                    </p>
                    {/* <p>
                      <span>Ip: </span> {location?.ip}
                    </p> */}
                    <button className="mt-2 bg-[#03b00b] text-white px-4 py-2 rounded hover:bg-[#03b00cdb] cursor-pointer text-sm sm:text-base">
                      Change Password
                    </button>
                  </div>
                </div>

                {/* Billing Info */}
                <div className="border border-gray-200 rounded shadow-sm">
                  <div className="bg-[#03b00b] text-white px-4 py-3 font-semibold">
                    Default Billing Address
                  </div>
                  <div className="p-4 space-y-2 text-sm sm:text-base">
                    <p className="font-medium">{user?.name}</p>
                    <p>
                      <span>Address: </span> {user?.address || "Not Provided"}
                    </p>

                    {/* <p>
                      <span>City: </span>Dhaka, {location?.country_name || "Bangladesh"}
                    </p> */}
                    <p>
                      <span>Phone: </span>{user?.phone || "Not Provided"}
                    </p>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                      className="mt-2 bg-[#03b00b] text-white px-4 py-2 rounded hover:bg-[#03b00cdb] cursor-pointer text-sm sm:text-base"
                    >
                      Edit Bill Address
                    </button>
                  </div>
                </div>
              </>
            )}

            {activeTab === "orders" && (
              <div className="border border-gray-200 rounded shadow-sm">
                <div className="bg-[#03b00b] text-white px-4 py-3 font-semibold">
                  My Orders
                </div>
                <div className="p-4 text-sm sm:text-base">
                  <p>You have not placed any orders yet.</p>
                </div>
              </div>
            )}
            {activeTab === "apply" && (
              <div className="border border-gray-200 rounded shadow-sm">
                <div className="bg-[#03b00b] text-white px-4 py-3 font-semibold">
                  Apply to Become a Lender
                </div>
                <div className="p-4 text-sm sm:text-base">
                  <form className='w-10/12 md:w-9/12 lg:w-8/12 mx-auto'>

                    <fieldset className="fieldset mb-3">
                      <label className="block mb-2 text-sm font-medium">Full Name*:</label>
                      <input
                        value={names}
                        onChange={(e) => setNames(e.target.value)}
                        type="text"
                        className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                        placeholder="Full Name *"
                      />
                    </fieldset>

                    <fieldset className="fieldset mb-3">
                      <label className="block mb-2 text-sm font-medium">Phone*:</label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="tel"
                        className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                        placeholder="Phone Number *"
                        required
                      />
                    </fieldset>

                    <fieldset className="fieldset mb-3">
                      <label className="block mb-2 text-sm font-medium">Address*:</label>
                      <input

                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                        placeholder="Address *"
                      />
                    </fieldset>

                    <fieldset className="fieldset mb-3">
                      <label className="block mb-2 text-sm font-medium">Upload Govt. ID*:</label>
                      <input
                        onChange={(e) => setSelectedImage(e.target.files[0])}
                        type="file"
                        className="file-input w-full focus:outline-none border-[#03b00b] bg-transparent rounded-[2px]"
                        placeholder="Upload Govt. ID"
                      />
                    </fieldset>

                    <fieldset className="fieldset mb-3 flex items-center gap-2">
                      <label className="block mb-2 text-sm font-medium">Bio:</label>
                      <textarea name="bio" value={bio} onChange={(e) => setBio(e.target.value)} id="" className='textarea w-full bg-transparent' placeholder='Anything you want to say? (optional)'></textarea>
                    </fieldset>

                    <fieldset className="fieldset mb-3 flex items-center gap-2">
                      <input type="checkbox" className="checkbox checkbox-sm" />
                      <label className="text-sm">I agree to the <Link className='underline text-green-600' href='/dashboard/settings/terms-and-conditions'>terms and conditions</Link> *</label>
                    </fieldset>

                    <fieldset className="fieldset mb-6">
                      <input
                        type="submit"
                        onClick={handleSubmitUpdate}
                        name="submit"
                        value={'Submit Application'}
                        className='bg-[#00B22C] text-white px-5 py-2 text-sm rounded active:scale-[0.95] transition-all duration-300 cursor-pointer w-full uppercase'
                      />
                    </fieldset>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">Name</label>
              <input
                {...register("name", {
                  required: "Name is required",
                  maxLength: {
                    value: 20,
                    message: "Maximum 20 characters allowed",
                  },
                })}
                placeholder="Enter your name"
                className="px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#03b00b]"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">City</label>
              <input
                {...register("city", {
                  required: "City is required",
                })}
                type="text"
                placeholder="Enter your city"
                className="px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#03b00b]"
              />
              {errors.city && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.city.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">
                Country
              </label>
              <input
                {...register("country", {
                  required: "Country is required",
                  maxLength: {
                    value: 2,
                    message: "Maximum 99 allowed",
                  },
                })}
                type="text"
                placeholder="Enter your country"
                className="px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#03b00b]"
              />
              {errors.country && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.country.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">Phone</label>
              <input
                {...register("phone", {
                  required: "Phone is required",
                })}
                type="text"
                placeholder="Enter your discount value"
                className="px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#03b00b]"
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="text-center">
              <h1 type="submit">
                <Button buttonText={"Update Account"} />
              </h1>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
