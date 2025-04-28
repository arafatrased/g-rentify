import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-2">
      <div className="container mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-[#03b00b]">Privacy Policy</li>
          </ol>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Privacy Policy
        </h1>

        <section className="space-y-8">
          {/* Introduction */}
          <div>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy is designed to better serve those concerned
              with how their 'Personally Identifiable Information' (PII) is
              collected, used, and protected online. PII, as defined under US
              privacy law and information security, refers to information that
              can be used on its own or with other information to identify,
              contact, or locate a single person. Please review this policy
              carefully to understand how we handle your information in
              connection with our website.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What Information Do We Collect?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              When registering or ordering on our site, you may be asked to
              provide your name, email address, phone number, credit card
              information, or other details to enhance your experience.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* When We Collect Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              When Do We Collect Information?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We collect information when you register on our site, place an
              order, fill out a form, or enter information on our website.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* How We Use Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How Do We Use Your Information?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                To personalize your experience and deliver content and offerings
                you care about.
              </li>
              <li>To improve our website and services.</li>
              <li>
                To respond more effectively to your customer service requests.
              </li>
              <li>
                To administer promotions, surveys, or other site features.
              </li>
              <li>To quickly process your transactions.</li>
              <li>
                To send periodic emails regarding your orders or other services.
              </li>
            </ul>
          </div>

          <hr className="border-gray-200" />

          {/* How We Protect Your Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How Do We Protect Visitor Information?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use vulnerability scanning and comply with PCI standards. Our
              site uses SSL encryption to protect your information.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We implement security measures when users:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Place an order</li>
              <li>Enter, submit, or access their information</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Payments are securely processed through a trusted payment gateway
              provider.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Use of Cookies */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Do We Use Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Yes, we use cookies to remember and process items in your shopping
              cart and enhance your experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If cookies are disabled, some site features, such as placing
              orders, may not function properly.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Third Party Disclosure */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Third Party Disclosure
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or otherwise transfer your Personally
              Identifiable Information to outside parties.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Third Party Links */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Third Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not include or offer third-party products or services on our
              website.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Google */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Google
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We currently do not use Google AdSense but may implement it in the
              future.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* CalOPPA Compliance */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              California Online Privacy Protection Act (CalOPPA)
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Users can visit our site anonymously.</li>
              <li>
                Our Privacy Policy link is available on our homepage and
                contains the word "Privacy."
              </li>
              <li>
                Users will be notified of any privacy policy changes on our
                Privacy Policy page.
              </li>
              <li>
                Users can change their personal information by emailing us,
                calling us, or logging into their account.
              </li>
            </ul>
          </div>

          <hr className="border-gray-200" />

          {/* Do Not Track */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Do Not Track Signals
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We honor Do Not Track (DNT) signals and do not track, plant
              cookies, or use advertising when a DNT browser mechanism is in
              place.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Third-Party Behavioral Tracking */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Third-Party Behavioral Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not allow third-party behavioral tracking.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* COPPA */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Children’s Online Privacy Protection Act (COPPA)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not specifically market to children under the age of 13.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Fair Information Practices */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Fair Information Practices
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the event of a data breach, we will notify users:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>By email within 1 business day</li>
              <li>By in-site notification within 1 business day</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We adhere to the individual redress principle, allowing
              individuals to pursue legally enforceable rights against data
              collectors who violate privacy laws.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* CAN-SPAM Compliance */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              CAN-SPAM Act
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                We collect your email address to send information, respond to
                inquiries, and process orders.
              </li>
              <li>
                We will not use false or misleading subjects or email addresses.
              </li>
              <li>
                We will clearly identify advertisements and include our physical
                address in communications.
              </li>
              <li>We honor opt-out/unsubscribe requests quickly.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To unsubscribe from future emails, please follow the instructions
              at the bottom of each email.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <div className="text-gray-700 space-y-1">
              <p>Motijheel commercial area</p>
              <p>Dhaka, IN 46012</p>
              <p>Phone: 765-378-0863</p>
              <p>Email: support@g-rentify.com</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
