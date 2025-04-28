import Link from "next/link";

const RentalAgreement = () => (
  <div className="bg-white">
    <div className="container mx-auto px- py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="text-gray-500 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <span className="text-gray-500">/</span>
          </li>
          <li className="text-[#03b00b]">Rental Agreement</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-8 text-center">Rental Agreement</h1>

      <div className="space-y-6">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 text-sm">
            This Rental Agreement (“Agreement”) is between you, the Customer
            (“Renter”), and our company, providing the equipment rental services
            (“Rental Company”). By renting our equipment, you agree to the terms
            and conditions outlined in this Agreement.
          </p>
        </section>

        {/* Rental Terms */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-4">
            Rental Terms
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
            <li>
              <strong>Rental Period:</strong> The minimum rental period is 24
              hours. Rental periods may be extended in 24-hour increments.
            </li>
            <li>
              <strong>Equipment:</strong> The equipment rented, as listed in the
              rental confirmation, is owned by the Rental Company and must be
              returned in the same condition as when received, except for
              reasonable wear and tear.
            </li>
            <li>
              <strong>Rental Fees:</strong> Fees are based on the rental period,
              as specified in the agreement, and must be paid in full before
              rental equipment is provided.
            </li>
            <li>
              <strong>Delivery & Pickup:</strong> The Renter is responsible for
              delivery and pickup unless otherwise stated in the agreement.
            </li>
          </ul>
        </section>

        {/* Payment Terms */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-4">
            Payment Terms
          </h2>
          <p className="text-gray-700 text-sm">
            All rental payments must be made in advance via credit/debit card or
            PayPal. The rental fees are non-refundable unless the cancellation
            occurs more than 48 hours before the scheduled rental period. Late
            fees will apply if the equipment is not returned within the agreed
            rental period.
          </p>
        </section>

        {/* Responsibilities */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-4">
            Responsibilities of the Renter
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
            <li>
              <strong>Equipment Care:</strong> The Renter is responsible for
              keeping the rented equipment safe and in good condition throughout
              the rental period.
            </li>
            <li>
              <strong>Accidental Damage:</strong> The Renter will be held liable
              for any accidental damage or loss of the rented equipment, and the
              full replacement cost may apply.
            </li>
            <li>
              <strong>Unauthorized Use:</strong> The Renter must not use the
              equipment for any unlawful activities or outside of the intended
              purpose specified in the rental agreement.
            </li>
          </ul>
        </section>

        {/* Return of Equipment */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-4">
            Return of Equipment
          </h2>
          <p className="text-gray-700 text-sm">
            The rented equipment must be returned on the agreed return date.
            Late returns will incur a daily late fee. If the equipment is not
            returned, the full cost of the equipment will be charged to the
            Renter.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 text-sm">
            The Rental Company is not liable for any direct, indirect,
            incidental, or consequential damages resulting from the use of the
            rented equipment. The Renter assumes full responsibility for the
            equipment and its usage during the rental period.
          </p>
        </section>

        {/* Termination & Cancellation */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-4">
            Termination & Cancellation
          </h2>
          <p className="text-gray-700 text-sm">
            The Rental Company reserves the right to terminate the rental
            agreement and repossess the equipment if the terms and conditions
            are violated. The Renter may cancel the agreement up to 48 hours
            before the rental period without penalty. After that, a cancellation
            fee may apply.
          </p>
        </section>

        {/* Agreement Acceptance */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-4">
            Agreement Acceptance
          </h2>
          <p className="text-gray-700 text-sm">
            By proceeding with the rental, the Renter acknowledges and agrees to
            abide by all terms and conditions outlined in this Rental Agreement.
            This agreement is binding and enforceable upon acceptance.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default RentalAgreement;
