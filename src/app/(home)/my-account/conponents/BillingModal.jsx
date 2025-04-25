import { useForm } from "react-hook-form";
import Button from "../../components/Button";

export default function BillingModal({ email }) {
  console.log(email);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
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
              <p className="text-sm text-red-500 mt-2">{errors.name.message}</p>
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
              <p className="text-sm text-red-500 mt-2">{errors.city.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Country</label>
            <input
              {...register("country", {
                required: "Country is required",
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
              placeholder="Enter your phone number"
              className="px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#03b00b]"
            />
            {errors.phone && (
              <p className="text-sm text-red-500 mt-2">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="text-center">
            <Button buttonText={"Update Account"} />
          </div>
        </form>
      </div>
    </dialog>
  );
}
