import logo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { IoShareSocial } from "react-icons/io5";
import { MdAttachEmail, MdPhoneInTalk } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="pt-14 md:pt-20 pb-10 border-t border-slate-200">
      {/* wrapper container  */}
      <div className="container mx-auto px-2 mb-10">
        {/* wrapper gird  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-5 xl:justify-items-center">
          {/* card 1 */}
          <div>
            <Image src={logo} alt="footer logo" className="w-52" priority={true}/>
            <p className="text-lg text-justify">
              We envision a future where everyone can experience cutting-edge
              technology without financial barriers. By promoting gadget
              rentals, we aim to reduce e-waste and create a smarter, more
              sustainable way to access tech.
            </p>
          </div>
          {/* card 2 */}
          <div className="max-w-fit">
            <h3 className="text-2xl font-semibold mb-5">Useful Links</h3>
            <ul className="flex flex-col gap-4 font-medium text-lg">
              <li className="list-disc ml-4 hover:text-[#03b00b] transition-all">
                <Link href={""}>About Renity</Link>
              </li>
              <li className="list-disc ml-4 hover:text-[#03b00b] transition-all">
                <Link href={""}>How It Works</Link>
              </li>
              <li className="list-disc ml-4 hover:text-[#03b00b] transition-all">
                <Link href={""}>Latest News</Link>
              </li>
              <li className="list-disc ml-4 hover:text-[#03b00b] transition-all">
                <Link href={""}>Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          {/* card 3 */}
          <div className="max-w-fit">
            <h3 className="text-2xl font-semibold mb-5">Explore Renity</h3>
            <ul className="flex flex-col gap-4 font-medium text-lg">
              <li className="list-disc ml-4 hover:text-[#03b00b] transition-all">
                <Link href={""}>Read FAQ’s</Link>
              </li>
              <li className="list-disc ml-4 hover:text-[#03b00b] transition-all">
                <Link href={""}>Recent Rentals</Link>
              </li>
              <li className="list-disc ml-4 hover:text-[#03b00b] transition-all">
                <Link href={""}>Latest Equipments</Link>
              </li>
              <li className="list-disc ml-4 hover:text-[#03b00b] transition-all">
                <Link href={""}>Browse Tools</Link>
              </li>
            </ul>
          </div>
          {/* card 4 */}
          <div className="max-w-fit">
            <h3 className="text-2xl font-semibold mb-5">Contact us</h3>
            <ul className="flex flex-col gap-4 font-medium text-lg">
              <li className="flex gap-3">
                <span>
                  <GrMapLocation className="text-3xl" />
                </span>
                <span>
                  100, Motijheel commercial area, <br /> Biman bhaban 1000
                </span>
              </li>
              <li className="flex gap-3">
                <span>
                  <MdPhoneInTalk className="text-3xl" />
                </span>
                <span>Call us +880 (140) 000 0000</span>
              </li>
              <li className="flex gap-3">
                <span>
                  <MdAttachEmail className="text-3xl" />
                </span>
                <span>g-rentify@domain.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* copy right  */}
      <div className="border-t border-slate-200 pt-10">
        <div className="container mx-auto px-3 flex flex-col md:flex-row  items-center justify-between gap-5">
          <p>© 2025 G-Rentify. All Rights Reserved. Terms & Conditions</p>
          <ul className="flex gap-5">
            <li className="border w-10 h-10 rounded-full flex justify-center items-center cursor-pointer text-xl hover:text-[#03b00b] transition-all">
              <a href="">
                <FaFacebookF />
              </a>
            </li>
            <li className="border w-10 h-10 rounded-full flex justify-center items-center cursor-pointer text-xl hover:text-[#03b00b] transition-all">
              <a href="">
                <FaTwitter />
              </a>
            </li>
            <li className="border w-10 h-10 rounded-full flex justify-center items-center cursor-pointer text-xl hover:text-[#03b00b] transition-all">
              <a href="">
                <FaGoogle />
              </a>
            </li>
            <li className="border w-10 h-10 rounded-full flex justify-center items-center cursor-pointer text-xl hover:text-[#03b00b] transition-all">
              <a href="">
                <IoShareSocial />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
