"use client";
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";

export default function AddGadget() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data.title);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h3 className="text-xl font-medium mb-5">Add Product</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3">
            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>
                    Drag &quot;n&quot; drop some files here, or click to select
                    files
                  </p>
                </div>
              )}
            </Dropzone>
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-2 gap-5">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">Title*</legend>
                <input
                  {...register("title", { required: true })}
                  type="text"
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
                  type="text"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Video Format (	MP4 / MOV (MPEG-4 AVC/H.264, HEVC/H.265))"
                />
                {errors.video_format && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>

              {/* BATTARY INFO */}

              <fieldset className="col-span-2 w-full mt-3">
                <strong className="text-[#03b00b]">
                  Battery Specification
                </strong>
                <div className="divider col-span-2 w-full m-0"></div>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">Capacity*</legend>
                <input
                  {...register("capacity", { required: true })}
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
                  type="text"
                  className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                  placeholder="Max Charging Power (80 W)"
                />
                {errors.max_charging_power && (
                  <span className="text-red-500">This field is required</span>
                )}
              </fieldset>
            </div>
            <input
              className="bg-[#03b00b] cursor-pointer text-white py-2 w-28 mt-5"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
