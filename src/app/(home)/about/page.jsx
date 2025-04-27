import Link from "next/link";

const About = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-2 py-12">
        {/* Breadcrumb */}
        <div className="breadcrumbs text-sm mb-6">
          <ul className="flex space-x-2">
            <li>
              <Link href="/" className=" hover:underline">
                Home
              </Link>
            </li>
            <li className="text-[#03b00b]">About</li>
          </ul>
        </div>

        {/* About Section */}
        <section>
          <h1 className="text-3xl font-bold mb-6">About Our Company</h1>
          <p className="text-gray-700 mb-4">
            <strong>Camera Lens Rentals</strong> is one of the leading online
            destinations for camera and lens rentals across the United States.
            Established in 2007, we began as a small startup operating from a
            spare bedroom in Anderson, Indiana — fueled by a passion for
            photography and a commitment to service excellence.
          </p>
          <p className="text-gray-700 mb-4">
            Over the years, our journey has been marked by rapid growth,
            multiple expansions, and the trust of thousands of photographers
            nationwide. Today, we proudly offer local pickups in Indiana and
            ship our premium gear to all 50 states. Whether you’re a
            professional photographer, a filmmaker, a hobbyist, or someone
            renting for the first time, our mission is to provide you with
            access to top-quality gear with unmatched customer service.
          </p>
          <p className="text-gray-700 mb-4">
            We specialize in camera and lens rentals for leading brands
            including Canon, Nikon, Sony, Pentax, and DJI. In 2013, we became
            the first rental company to offer DJI drones online, and we've
            continued to lead the industry with the largest fleet of rental
            drones available today. Our focus remains on providing innovative,
            reliable, and easy rental experiences for everyone, from small
            personal shoots to large commercial productions.
          </p>
          <p className="text-gray-700 mb-4">
            At Camera Lens Rentals, we believe that creativity should never be
            limited by access to gear. That's why we keep our inventory fresh,
            our prices fair, and our service personal. Every customer is part of
            our growing family, and your success behind the lens is our top
            priority.
          </p>
        </section>

        {/* What You Can Expect Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">What You Can Expect</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              <strong>Exceptional Customer Service —</strong> We are committed
              to making every rental experience smooth, personal, and
              stress-free. Our team is always available to answer questions,
              offer gear advice, and support you every step of the way.
            </li>
            <li>
              <strong>Top-Quality Gear —</strong> We carefully maintain and
              update our equipment, retiring older gear every 12–18 months, so
              you always get clean, dependable, professional-grade tools for
              your projects.
            </li>
            <li>
              <strong>Competitive Pricing —</strong> Great photography shouldn’t
              be expensive. We offer highly competitive rental rates and monthly
              discount codes through our newsletter, making it easy for you to
              access the gear you need without breaking the bank.
            </li>
            <li>
              <strong>Fast and Reliable Shipping —</strong> We partner with UPS
              to ensure timely deliveries across the country. Whether you choose
              Ground, 2nd Day, or Overnight shipping, every order is guaranteed
              to reach you within two days.
            </li>
            <li>
              <strong>Flexible Reservations —</strong> Planning a shoot months
              ahead? No problem. Our flexible rental terms allow you to reserve
              equipment up to a year in advance, with rental periods ranging
              from 3 days to 90 days based on your needs.
            </li>
            <li>
              <strong>Expert Advice —</strong> Not sure what gear you need? Our
              knowledgeable team is happy to guide you in selecting the right
              cameras, lenses, drones, and accessories for your project —
              ensuring you have everything required to succeed.
            </li>
          </ul>
        </section>

        {/* Final paragraph */}
        <p className="text-gray-700 mt-8">
          The <strong>Camera Lens Rentals</strong> team looks forward to helping
          you capture your creative vision with confidence. Whether you're
          shooting a wedding, a documentary, a personal project, or exploring
          drone photography for the first time — we're honored to be a part of
          your journey. Experience the difference with us today!
        </p>
      </div>
    </div>
  );
};

export default About;
