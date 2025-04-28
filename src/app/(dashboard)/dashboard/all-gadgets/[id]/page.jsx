"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import axios from "axios";
import { redirect, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

const animatedComponents = makeAnimated();

const includesOption = [
  { value: "controller", label: "Controller" },
  { value: "charger", label: "Charger" },
  { value: "charging hub", label: "Charging Hub" },
  { value: "sd card", label: "SD Card" },
  { value: "battery", label: "Battery" },
  {
    value: "GoProfessional Carrying Case",
    label: "GoProfessional Carrying Case",
  },
];

const categoryOption = [
  { value: "camera", label: "Camera" },
  { value: "drone", label: "Drone" },
];

export default function UpdateGadget() {
  const { id } = useParams();
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const lender = {
    itemAddedUser: session?.data?.user?.name,
    itemAddedEmail: session?.data?.user?.email,
  };

  const [gadget, setGadget] = useState(null);

  // get data by id
  useEffect(() => {
    if (!id) return;

    const fetchGadgetDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_LINK}/gadgets/${id}`
        );
        const data = await res.json();
        setGadget(data);
      } catch (error) {
        // console.log("Failed to fetch gadget.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGadgetDetails();
  }, [id]);

  // react hook form function
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  // set default value for hook form
  useEffect(() => {
    if (gadget) {
      setValue("title", gadget.title);
      setValue("sensor", gadget.sensor);
      setValue("iso_range", gadget.iso_range);
      setValue("color_mode", gadget.color_mode);
      setValue("supported_file_system", gadget.supported_file_system);
      setValue("still_image_size", gadget.still_image_size);
      setValue("video_resolution", gadget.video_resolution);
      setValue("max_video_bitrate", gadget.max_video_bitrate);
      setValue("photo_format", gadget.photo_format);
      setValue("video_format", gadget.video_format);
      setValue("price", gadget.price);
      setValue("description", gadget.description);
      setValue("capacity", gadget.capacity);
      setValue("voltage", gadget.voltage);
      setValue("max_charging_voltage", gadget.max_charging_voltage);
      setValue("battery_type", gadget.battery_type);
      setValue("energy", gadget.energy);
      setValue("net_weight", gadget.net_weight);
      setValue("charging_temperature_range", gadget.charging_temperature_range);
      setValue("max_charging_power", gadget.max_charging_power);
      setValue("includes", gadget.includes);
      setValue("category", gadget.category);
      setValue("images", gadget.images);
      setValue("lender", gadget.lender);
    }
  }, [gadget, setValue]);

  // submit form function
  const onSubmit = async (data) => {
    setLoading(true);
    if (selectedImages.length === 0)
      return toast.error("You need to update gadgets image!");
    if (selectedImages.length > 3)
      return toast.error("You can add maximum three images!");
    if (selectedImages.length === 1)
      return toast.error("Add minimum two images!");
    const api_key = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
    // upload image imgbb hostion server
    const imageUrls = await Promise.all(
      selectedImages.map(async (file) => {
        const formData = new FormData();
        formData.append("key", api_key);
        formData.append(
          "image",
          await new Promise((res) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => res(reader.result.split(",")[1]);
          })
        );
        const res = await fetch("https://api.imgbb.com/1/upload", {
          method: "POST",
          body: formData,
        });
        return (await res.json()).data.url;
      })
    );
    // get all data
    const gadgetInfo = { ...data, images: imageUrls };

    // update all data in mongoDB
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_SERVER_LINK}/update-gadget/${id}`,
      gadgetInfo
    );
    if (response.data.modifiedCount === 1) {
      toast.success("Update successfully!");
      redirect("/dashboard/all-gadgets");
    } else {
      toast.error("Failed to update data");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h3 className="text-2xl font-medium">Update Product</h3>

      {/* Breadcrumbs */}
      <div className="breadcrumbs text-sm mb-5">
        <ul>
          <li>
            <Link className="text-gray-500" href={"/dashboard"}>
              Dashboard
            </Link>
          </li>
          <li>
            <span className="text-[#03b00b] !no-underline">Update Product</span>
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-5">
          {/* image select */}
          <div className="col-span-12 xl:col-span-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm">
                Upload Images*
              </legend>
              <div className="border border-dashed border-[#ccc] p-5 min-h-48 rounded flex flex-col items-center justify-center text-center">
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    setSelectedImages([...selectedImages, ...acceptedFiles]);
                  }}
                  accept={{ "image/*": [] }}
                  multiple
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p className="text-[#00000099] text-[15px] font-bold">
                        Drag &amp; drop your file or{" "}
                        <span className="cursor-pointer">
                          <u>Browse</u>
                        </span>
                      </p>
                    </div>
                  )}
                </Dropzone>
              </div>

              {/* Display image previews */}
              {selectedImages.length > 0 && (
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {selectedImages.map((file, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={URL.createObjectURL(file)}
                        alt="preview"
                        width={300}
                        height={300}
                        className="w-full h-24 object-cover rounded"
                      />
                      <button
                        type="button"
                        className="absolute top-1 right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 cursor-pointer rounded-[2px]"
                        onClick={() =>
                          setSelectedImages(
                            selectedImages.filter((_, i) => i !== index)
                          )
                        }
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </fieldset>
          </div>
          <div className="col-span-12 xl:col-span-9">
            <div className="md:grid grid-cols-2 gap-5">
              <fieldset className="fieldset ">
                <legend className="fieldset-legend text-sm">Title*</legend>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  defaultValue={gadget?.title}
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Title (Rent a DJI Mavic 2 Pro Drone)"
                />
                {errors.title && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">Sensor*</legend>
                <input
                  {...register("sensor", { required: true })}
                  type="text"
                  defaultValue={gadget?.sensor}
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Sensor (	1” CMOS Effective Pixels: 20 million)"
                />
                {errors.sensor && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">ISO Range*</legend>
                <input
                  {...register("iso_range", { required: true })}
                  type="text"
                  defaultValue={gadget?.iso_range}
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="ISO Range (	Video:100-6400 Photo: 100-320(auto)100-12800 (manual))"
                />
                {errors.iso_range && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">Color Mode*</legend>
                <input
                  {...register("color_mode", { required: true })}
                  type="text"
                  defaultValue={gadget?.color_mode}
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Color Mode (	Dlog-M (10bit), support HDR video (HLG 10bit))"
                />
                {errors.color_mode && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">
                  Supported File System*
                </legend>
                <input
                  {...register("supported_file_system", { required: true })}
                  type="text"
                  defaultValue={gadget?.supported_file_system}
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Supported File System (FAT32 (≤ 32 GB) exFAT (> 32 GB))"
                />
                {errors.supported_file_system && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">
                  Still Image Size*
                </legend>
                <input
                  {...register("still_image_size", { required: true })}
                  defaultValue={gadget?.still_image_size}
                  type="text"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Still Image Size (5472×3648)"
                />
                {errors.still_image_size && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">
                  Video Resolution*
                </legend>
                <input
                  {...register("video_resolution", { required: true })}
                  defaultValue={gadget?.video_resolution}
                  type="text"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Video Resolution (	4K: 3840×2160 24/25/30p 2.7K 2688x1512 24/25/30/48/50/60p)"
                />
                {errors.video_resolution && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">
                  Max Video Bitrate*
                </legend>
                <input
                  {...register("max_video_bitrate", { required: true })}
                  defaultValue={gadget?.max_video_bitrate}
                  type="text"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Max Video Bitrate (100Mbps)"
                />
                {errors.max_video_bitrate && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">
                  Photo Format*
                </legend>
                <input
                  {...register("photo_format", { required: true })}
                  defaultValue={gadget?.photo_format}
                  type="text"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Photo Format (JPEG / DNG (RAW))"
                />
                {errors.photo_format && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">
                  Video Format*
                </legend>
                <input
                  {...register("video_format", { required: true })}
                  defaultValue={gadget?.video_format}
                  type="text"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Video Format (	MP4 / MOV (MPEG-4 AVC/H.264, HEVC/H.265))"
                />
                {errors.video_format && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">Include*</legend>

                {/* Multi-Select Dropdown */}
                <Controller
                  name="includes"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      components={animatedComponents}
                      isMulti
                      options={includesOption}
                      classNamePrefix="select"
                      styles={{
                        control: (baseStyles, { isFocused }) => ({
                          ...baseStyles,
                          backgroundColor: "transparent",
                          borderColor: isFocused ? "#03b00b" : "#ccc",
                          boxShadow: isFocused ? "0 0 0 0.1px #03b00b" : "none",
                          borderRadius: "2px",
                          "&:hover": {
                            borderColor: isFocused ? "#03b00b" : "#ccc",
                            boxShadow: isFocused
                              ? "0 0 0 0.1px #03b00b"
                              : "none",
                          },
                        }),
                        option: (base, { isFocused, isSelected }) => ({
                          ...base,
                          backgroundColor: isSelected
                            ? "#03b00b"
                            : isFocused
                            ? "transparent"
                            : "transparent",
                          color: isSelected ? "white" : "inherit",
                          cursor: "pointer",
                        }),
                      }}
                    />
                  )}
                />

                {/* Error Message */}
                {errors.includes && (
                  <span className="text-red-500">
                    {errors.includes.message}
                  </span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">Cagegory*</legend>

                {/* Multi-Select Dropdown */}
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={categoryOption}
                      isSearchable={false}
                      classNamePrefix="select"
                      styles={{
                        control: (baseStyles, { isFocused }) => ({
                          ...baseStyles,
                          backgroundColor: "transparent",
                          borderColor: isFocused ? "#03b00b" : "#ccc",
                          boxShadow: isFocused ? "0 0 0 0.1px #03b00b" : "none",
                          borderRadius: "2px",
                          "&:hover": {
                            borderColor: isFocused ? "#03b00b" : "#ccc",
                            boxShadow: isFocused
                              ? "0 0 0 0.1px #03b00b"
                              : "none",
                          },
                        }),
                        option: (base, { isFocused, isSelected }) => ({
                          ...base,
                          backgroundColor: isSelected
                            ? "#03b00b"
                            : isFocused
                            ? "transparent"
                            : "transparent",
                          color: isSelected ? "white" : "inherit",
                          cursor: "pointer",
                        }),
                      }}
                    />
                  )}
                />

                {/* Error Message */}
                {errors.category && (
                  <span className="text-red-500">
                    {errors.includes.message}
                  </span>
                )}
              </fieldset>

              <fieldset className="fieldset col-span-2">
                <legend className="fieldset-legend text-sm">Price*</legend>

                <input
                  {...register("price", { required: true })}
                  defaultValue={gadget?.price}
                  type="number"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px] "
                  placeholder="Price"
                />

                {/* Error Message */}
                {errors.price && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset col-span-2">
                <legend className="fieldset-legend text-sm">
                  Description*
                </legend>

                <textarea
                  {...register("description", { required: true })}
                  defaultValue={gadget?.description}
                  className="textarea h-40 w-full input focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px] px-3 resize-none break-words"
                  placeholder="Description"
                  style={{
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    whiteSpace: "pre-wrap",
                  }}
                ></textarea>

                {/* Error Message */}
                {/* {errors.description && (
                  <span className="text-red-500">
                    {errors.includes.message}
                  </span>
                )} */}
              </fieldset>

              {/* BATTARY INFO */}

              <fieldset className="col-span-2 w-full mt-5">
                <strong className="text-[#03b00b]">
                  Battery Specification
                </strong>
                <div className="divider col-span-2 w-full m-0"></div>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">Capacity*</legend>
                <input
                  {...register("capacity", { required: true })}
                  defaultValue={gadget?.capacity}
                  type="text"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px] "
                  placeholder="Capacity (3850 mAh)"
                />
                {errors.capacity && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">Voltage*</legend>
                <input
                  {...register("voltage", { required: true })}
                  defaultValue={gadget?.voltage}
                  type="text"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px] "
                  placeholder="Voltage (15.4 V)"
                />
                {errors.voltage && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">
                  Max Charging Voltage*
                </legend>
                <input
                  {...register("max_charging_voltage", { required: true })}
                  defaultValue={gadget?.max_charging_voltage}
                  type="text"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Max Charging Voltage (17.6 V)"
                />
                {errors.max_charging_voltage && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">
                  Battery Type*
                </legend>
                <input
                  {...register("battery_type", { required: true })}
                  defaultValue={gadget?.battery_type}
                  type="text"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Battery Type (LiPo 4S)"
                />
                {errors.battery_type && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">Energy*</legend>
                <input
                  {...register("energy", { required: true })}
                  defaultValue={gadget?.energy}
                  type="text"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Energy (59.29 Wh)"
                />
                {errors.energy && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">Net Weight*</legend>
                <input
                  {...register("net_weight", { required: true })}
                  defaultValue={gadget?.net_weight}
                  type="text"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Net Weight (297 g)"
                />
                {errors.net_weight && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">
                  Charging Temperature Range*
                </legend>
                <input
                  {...register("charging_temperature_range", {
                    required: true,
                  })}
                  defaultValue={gadget?.charging_temperature_range}
                  type="text"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder=" Charging Temperature Range (5℃ - 40℃)"
                />
                {errors.charging_temperature_range && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">
                  Max Charging Power*
                </legend>
                <input
                  {...register("max_charging_power", { required: true })}
                  defaultValue={gadget?.max_charging_power}
                  type="text"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Max Charging Power (80 W)"
                />
                {errors.max_charging_power && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>
            </div>

            <button
              className="bg-[#03b00b] cursor-pointer text-white py-2 w-36 mt-5 rounded"
              type="submit"
            >
              {loading ? (
                <span className="loading loading-dots loading-sm"></span>
              ) : (
                <span>Update Gadget</span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
