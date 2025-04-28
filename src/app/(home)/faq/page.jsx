import Link from "next/link";

const FAQ = () => (
  <div className="bg-white">
    <div className="container mx-auto px-4 py-12">
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
          <li className="text-[#03b00b]">FAQ</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {/* Rental Offerings */}
        <div className="collapse bg-base-100 border border-base-300 rounded">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-xl font-semibold">
            What products do you offer for rent?
          </div>
          <div className="collapse-content text-gray-700 text-sm">
            We offer a broad selection of photography and videography gear,
            including:
            <ul className="list-disc list-inside mt-2">
              <li>
                DSLR and mirrorless cameras (Canon, Nikon, Sony, Fujifilm)
              </li>
              <li>Professional lenses (wide, portrait, telephoto, macro)</li>
              <li>Lighting equipment (flashes, LED panels, light modifiers)</li>
              <li>
                DJI drones and gimbal stabilizers for aerial and action footage
              </li>
              <li>Accessories (tripods, memory cards, batteries, filters)</li>
            </ul>
          </div>
        </div>

        {/* Reservation Process */}
        <div className="collapse bg-base-100 border border-base-300 rounded">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-semibold">
            How do I make a reservation?
          </div>
          <div className="collapse-content text-gray-700 text-sm">
            To reserve equipment:
            <ol className="list-decimal list-inside mt-2">
              <li>Browse our catalog and select your desired items.</li>
              <li>Choose rental start and end dates (up to 90 days ahead).</li>
              <li>
                Complete the secure checkout with payment and shipping details.
              </li>
              <li>
                Receive a confirmation email with your order summary and
                tracking info.
              </li>
            </ol>
            You can modify or cancel your reservation up to 48 hours before the
            rental start date without penalty.
          </div>
        </div>

        {/* Stock Notifications */}
        <div className="collapse bg-base-100 border border-base-300 rounded">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-semibold">
            What if the product I want is out of stock?
          </div>
          <div className="collapse-content text-gray-700 text-sm">
            If an item is unavailable, we offer:
            <ul className="list-disc list-inside mt-2">
              <li>
                Real-time suggestions for similar gear with comparable specs.
              </li>
              <li>
                Option to sign up for "Back in Stock" notifications via email.
              </li>
              <li>
                Personalized assistance from our support team for custom
                solutions.
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Structure */}
        <div className="collapse bg-base-100 border border-base-300 rounded">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-semibold">
            How is the rental pricing determined?
          </div>
          <div className="collapse-content text-gray-700 text-sm">
            Pricing is calculated based on:
            <ul className="list-disc list-inside mt-2">
              <li>Equipment type and brand tier</li>
              <li>Rental duration (daily, weekly, monthly rates)</li>
              <li>Current availability and seasonal demand</li>
            </ul>
            Discounts apply automatically for rentals of 7+ days or more than
            three items. All fees and taxes are clearly displayed at checkout.
          </div>
        </div>

        {/* Shipping & Returns */}
        <div className="collapse bg-base-100 border border-base-300 rounded">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-semibold">
            How do you handle shipping and returns?
          </div>
          <div className="collapse-content text-gray-700 text-sm">
            We partner with UPS for all deliveries and returns:
            <ul className="list-disc list-inside mt-2">
              <li>Shipping options: Ground (3-5 days), 2nd Day, Overnight.</li>
              <li>Prepaid return label included in your package.</li>
              <li>
                Equipment is insured and tracked until it's safely back to us.
              </li>
              <li>
                Late returns incur a daily holding fee — please notify us if you
                need an extension.
              </li>
            </ul>
          </div>
        </div>

        {/* Account and Support */}
        <div className="collapse bg-base-100 border border-base-300 rounded">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-semibold">
            How do I create an account and manage my profile?
          </div>
          <div className="collapse-content text-gray-700 text-sm">
            <p>
              To get started, click "Sign Up" in the header and complete
              registration. Once logged in, go to "My Account" to:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Update personal information (name, email, phone)</li>
              <li>Manage shipping and billing addresses</li>
              <li>View order history and upcoming reservations</li>
              <li>Reset your password securely from the profile settings</li>
            </ul>
          </div>
        </div>

        {/* Payments & Refunds */}
        <div className="collapse bg-base-100 border border-base-300 rounded">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-semibold">
            What payment methods are accepted, and what is the refund policy?
          </div>
          <div className="collapse-content text-gray-700 text-sm">
            <p>
              We accept major credit/debit cards (Visa, MasterCard, Amex) and
              PayPal. Refunds are processed within 5-7 business days to the
              original payment method. Cancellations up to 48 hours before
              rental start receive a full refund; late cancellations are subject
              to a 50% fee.
            </p>
          </div>
        </div>

        {/* Support Contact */}
        <div className="collapse bg-base-100 border border-base-300 rounded">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-semibold">
            How can I contact customer support?
          </div>
          <div className="collapse-content text-gray-700 text-sm">
            <p>Our support team is available via:</p>
            <ul className="list-disc list-inside mt-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@g-rentify.com"
                  className="text-[#03b00b] underline"
                >
                  support@g-rentify.com
                </a>
              </li>
              <li>Phone: (123) 456-7890 (Mon–Fri, 9am–6pm)</li>
              <li>
                Live chat: Click the chat icon at the bottom-right corner of any
                page.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FAQ;
