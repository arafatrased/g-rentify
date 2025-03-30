// import { MdMarkEmailRead, MdCall } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
// import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import PageHeader from "../components/PageHeader";

const ContactUS = () => {
  return (
    <>
      <PageHeader pageTitle={"Contact Us"} bgColor={"black"} />
      <section className="w-11/12 mx-auto grid my-8 grid-cols-1 md:grid-cols-2 gap-[35px] boxShadow p-[30px] rounded-xl border">
        {/*  informations  */}
        <aside className="w-full bg-gray-800 flex flex-col justify-between p-[25px] rounded-md">
          <div>
            <h1 className="text-[2rem] font-[600] leading-[35px] text-white">
              Contact G-Rentify
            </h1>
            <p className="text-[0.9rem] mt-1 mb-8 text-white">
              Say something to start a live chat!
            </p>
          </div>

          <div className="flex flex-col gap-[20px] text-gray-300">
            <p className="flex items-center gap-[8px]">
              <MdOutlineCall />
              +8801305282768
            </p>
            <p className="flex items-center break-all gap-[8px]">
              <MdOutlineEmail />
              grentify@domain.com
            </p>
            <p className="flex items-center gap-[8px]">
              <IoLocationOutline />
              Banani, Dhaka
            </p>
          </div>

          <div className="flex gap-[15px] flex-wrap text-black mt-8">
            <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300  boxShadow">
              <CgFacebook />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300 boxShadow">
              <BsTwitter />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300  boxShadow">
              <BsInstagram />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300 boxShadow">
              <BsLinkedin />
            </a>
          </div>
        </aside>

        {/* form area */}
        <form className="pt-[20px]">
          <div className="flex flex-col sm:flex-row items-center gap-[30px]">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <label className="text-[1rem] text-gray-700">First Name</label>
              <input
                type="text"
                className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <label className="text-[1rem] text-gray-700">Last Name</label>
              <input
                type="text"
                className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <label className="text-[1rem] text-gray-700">Email Address</label>
              <input
                type="email"
                className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <label className="text-[1rem] text-gray-700">Phone Number</label>
              <input
                type="number"
                className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[5px] w-full mt-10">
            <label className="text-[1rem] text-gray-700">Write Message</label>
            <textarea className="peer min-h-[100px] border-gray-300 border-b resize-none outline-none w-full text-gray-400 transition-colors focus:border-[#3B9DF8] duration-300"></textarea>
          </div>

          <div className="w-full flex items-center sm:items-end justify-center sm:justify-end mt-5">
            <button
              type="submit"
              className=" py-2.5 px-6 bg-gray-800 border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 hover:bg-transparent text-white rounded-md text-[1rem] mt-[10px] w-max"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
      {/* <div className="univarsal_div">
        <div className="container">
          <div className="text-center univarsal_text_div" data-aos="fade-down">
            <h1>
              <span className="headdingGradientText text-black">
                Get In Touch
              </span>
            </h1>
          </div>

          
          <div className="contactus_text_section">
            <div className="flex">
              <div className="col-sm-12 col-md-6 contactus_text_div">
                <h2 className="contactus_text_heading">
                  Ready to Turn Your Vision into Reality?
                </h2>
                <p className="contactus_text_para">
                  Want to blast your business off like a rocket? Tojo
                  Global&#39;s got a secret weapon for you: an amazing custom
                  Marketing, Management , Design, Development & Crypto listing
                  plan which will turn heads and grow your business faster than
                  ever. Don&#39;t wait! Call or email Tojo Global and watch your
                  success soar!
                </p>
                <div className="contactus_Services">
                  <div className="contactus_Services_icon_div">
                    <div className="contactus_Services_icon">
                      <MdCall className="contactus_icon" />
                    </div>
                    <div className="contactus_Services_icon">
                      <MdMarkEmailRead className="contactus_icon" />
                    </div>

                    <div className="contactus_Services_icon">
                      <FaLocationDot className="contactus_icon" />
                    </div>
                  </div>
                  <div className="contactus_Services_text_div">
                    <div className="contactus_Services_text">
                      <p>+880 1333-411624</p>
                    </div>
                    <div className="contactus_Services_text">
                      <p>hello@tojoglobal.com</p>
                    </div>
                    <div className="contactus_Services_text">
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>

                <div className="footer_social_media">
                  <a
                    className="footer_social_media_link"
                    href="https://www.facebook.com/TOJOGlobal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="bx bxl-twitter footer_icon" />
                  </a>
                  <a
                    className="footer_social_media_link"
                    href="https://x.com/TOJOGlobal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="bx bxl-twitter footer_icon" />
                  </a>
                  <a
                    className="footer_social_media_link"
                    href="https://www.linkedin.com/company/tojo-global/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="bx footer_icon" />
                  </a>
                  <a
                    className="footer_social_media_link"
                    href="https://t.me/TOJO_Global"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegramPlane className="bx footer_icon" />
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 contactus_input_fild_div">
                
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ContactUS;
