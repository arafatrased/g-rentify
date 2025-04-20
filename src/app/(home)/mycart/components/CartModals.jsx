import React from "react";
import { IoMdClose } from "react-icons/io";

export default function CartModals() {
  return (
    <>
      <dialog id="inStoreModal" className="modal !bg-[#000000a1]">
        <div className="modal-box max-w-[320px] p-5">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="absolute right-3 top-3 cursor-pointer text-2xl outline-none">
              <IoMdClose />
            </button>
          </form>
          <h3 className="font-bold text-lg">In-store pickup</h3>
          <p className="pt-4 pb-2">In-store pickup is free.</p>
        </div>
      </dialog>
      <dialog id="taxsModal" className="modal !bg-[#000000a1]">
        <div className="modal-box max-w-[360px] p-5">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="absolute right-3 top-3 cursor-pointer text-2xl outline-none">
              <IoMdClose />
            </button>
          </form>
          <p className="font-bold text-lg">Goverment Taxs</p>
          <p className="pt-4 pb-2">
            Your purchase is subject to tax. Final price includes all applicable
            charges and taxes.
          </p>
        </div>
      </dialog>
      <dialog id="discountModal" className="modal !bg-[#000000a1]">
        <div className="modal-box max-w-[360px] p-5">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="absolute right-3 top-3 cursor-pointer text-2xl outline-none">
              <IoMdClose />
            </button>
          </form>
          <p className="font-bold text-lg">Limited Time Discount!</p>
          <p className="pt-4 pb-2">
            Get a special discount on your purchase. Hurry, offer ends soon!
          </p>
        </div>
      </dialog>
    </>
  );
}
