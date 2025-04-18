'use client';
import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <div className='py-5 px-5'>
      {/* breadcrumb  */}
      <div className="breadcrumbs text-sm mb-6">
        <ul>
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href='/dashboard/settings'>
              Settings
            </Link>
          </li>
          <li>
            <Link href='/dashboard/settings/terms-and-conditions' className="text-[#03b00b]">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>

      <div className="page-container py-3">
        <h1 className='text-3xl md:text-3xl lg:text-4xl font-bold text-center mb-8'>
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
          <p><strong>Last Updated:</strong> 10th April 2025</p>

          <p>
            Welcome to <strong>G-Rentify</strong>, a gadget rental platform that connects renters and lenders in a trusted environment. By accessing or using our services, you agree to the following Terms and Conditions.
          </p>

          <h2 className="text-lg font-semibold mt-6">1. User Eligibility</h2>
          <ul className="list-disc ml-6">
            <li>You must be at least 18 years old to use G-Rentify.</li>
            <li>You must provide accurate and complete information during registration.</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">2. Account Responsibility</h2>
          <ul className="list-disc ml-6">
            <li>You are responsible for maintaining the confidentiality of your account.</li>
            <li>All activity under your account is your responsibility.</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">3. Renter Terms</h2>
          <ul className="list-disc ml-6">
            <li>Return gadgets in the same condition and by the due date.</li>
            <li>Late returns may result in additional fees.</li>
            <li>Damages or loss during the rental period are the renter’s responsibility.</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">4. Lender Terms</h2>
          <ul className="list-disc ml-6">
            <li>Ensure gadgets are fully functional and accurately described.</li>
            <li>Respond to rental requests in a timely manner.</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">5. Payments & Refunds</h2>
          <ul className="list-disc ml-6">
            <li>Payments are handled securely via our platform.</li>
            <li>Refunds are processed based on our refund policy and case review.</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">6. Prohibited Activities</h2>
          <ul className="list-disc ml-6">
            <li>Do not list illegal, hazardous, or counterfeit items.</li>
            <li>Use the platform legally and respectfully.</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">7. Verification & Safety</h2>
          <ul className="list-disc ml-6">
            <li>Lenders may require valid government ID for verification.</li>
            <li>Safety guidelines must be followed when exchanging items.</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">8. Intellectual Property</h2>
          <p>
            All content on G-Rentify (logos, images, etc.) is owned by G-Rentify and may not be reused without permission.
          </p>

          <h2 className="text-lg font-semibold mt-6">9. Limitation of Liability</h2>
          <p>
            G-Rentify is not responsible for any direct or indirect damages or disputes between users.
          </p>

          <h2 className="text-lg font-semibold mt-6">10. Termination</h2>
          <p>
            G-Rentify may suspend or terminate accounts for violations of these terms.
          </p>

          <h2 className="text-lg font-semibold mt-6">11. Changes to Terms</h2>
          <p>
            These terms may be updated. Continued use of the platform means acceptance of any changes.
          </p>

          <h2 className="text-lg font-semibold mt-6">12. Contact Us</h2>
          <p>
            If you have questions or concerns, please contact us at: <br />
            <a href="mailto:support@g-rentify.com" className="text-blue-600 underline">info@g-rentify.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
