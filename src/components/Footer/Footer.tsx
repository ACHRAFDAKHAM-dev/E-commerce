import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";



const socialLinks = [
  { icon: <FaFacebookF />, to: "https://facebook.com" },
  { icon: <FaInstagram />, to: "https://instagram.com" },
  { icon: <FaLinkedinIn />, to: "https://linkedin.com" },
  { icon: <FaPinterestP />, to: "https://pinterest.com" },
];

const footerItems = [
  {
    icon: <LiaShippingFastSolid />,
    title: "Free Shipping",
    desc: "For all Orders Over $100",
  },
  {
    icon: <PiKeyReturnLight />,
    title: "30 Days Returns",
    desc: "For an Exchange Product",
  },
  {
    icon: <BsWallet2 />,
    title: "Secured Payment",
    desc: "Payment Cards Accepted",
  },
  {
    icon: <LiaGiftSolid />,
    title: "Special Gifts",
    desc: "Our First Product Order",
  },
  { icon: <BiSupport />, title: "Support 24/7", desc: "Contact us Anytime" },
];

const Footer: React.FC = () => {
  return (
   <>
    <footer className="py-6 bg-[#fafafa]">
      <div className="container">
        <div className="flex justify-center py-8 items-center gap-2">
          {footerItems.map((item, index) => (
            <div
              key={index}
              className="col flex items-center justify-center flex-col group w-[15%]"
            >
              <div className="text-[40px] group-hover:-translate-y-1 transition-all duration-300 group-hover:text-primary-color">
                {item.icon}
              </div>
              <h3 className="text-[18px] font-[600] mt-3">{item.title}</h3>
              <p className="text-[12px] font-[500] mt-3">{item.desc}</p>
            </div>
          ))}
        </div>

        <hr />

        <div className="footer flex justify-between py-8">
          <div className="part-1 w-[30%] border-r border-[rgba(0,0,0,0.1)]">
            <h2 className="text-[18px] font-[600] mb-5">Contact Us</h2>
            <p className="text-[13px] font-[400] pb-2">
              Classyshop - Mega Super Store
              <br /> 507-Union Trade Centre France
            </p>

            <Link
              className="link text-[13px]"
              to={"mailto:sales@yourcompany.com"}
            >
              sales@yourcompany.com
            </Link>

            <span className="text-[22px] font-[600] block w-full mt-3 mb-5 text-primary-color">
              (+212) 76-282-650
            </span>

            <div className="flex items-center gap-2">
              <IoChatboxOutline className="text-[40px] text-primary-color" />
              <span className="text-[16px] font-[600]">
                Online Chat <br /> Get Expert Help
              </span>
            </div>
          </div>

          <div className="part-2 pl-8 w-[40%] flex">
            <div className="part2_col1 w-[50%]">
              <h2 className="text-[18px] font-[600] mb-5">Products</h2>
              <ul className="list-none text-[13px] space-y-2">
                <li>
                  <Link to={"/"} className="link block text-[14px]">
                    Prices drop
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link block text-[14px]">
                    New products
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link block text-[14px]">
                    Best sales
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link block text-[14px]">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link block text-[14px]">
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link block text-[14px]">
                    Stores
                  </Link>
                </li>
              </ul>
            </div>

            <div className="part2_col1 w-[50%]">
              <h2 className="text-[18px] font-[600] mb-5">Our company</h2>
              <ul className="list-none text-[13px] space-y-2">
                <li>
                  <Link to={"/"} className="link block text-[14px]">
                    Delivery
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link block text-[14px]">
                    Legal Notice
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link block text-[14px]">
                    Terms and conditions of use
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link block text-[14px]">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link block text-[14px]">
                    Secure payment
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link block text-[14px]">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
            <br />
          <div className="part-3 pl-8 w-[30%] flex flex-col pr-8">
            <h2 className="text-[18px] font-[600] mb-5">
              Subscribe to newsletter
            </h2>
            <p className="text-[13px] font-[400] pb-2">
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>
            <form className="mt-5">
              <input
                type="text"
                className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)] transition-all "
                placeholder="Your Email Address"
              />
              <Button className="btn-org">SUBSCRIBE</Button>
                 <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the terms and conditions and the privacy policy" />
            </form>
          </div>
        </div>
      </div>
    </footer>
    <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3 bg-white"> 
          <div className="container flex items-center justify-between">
            <ul className="flex items-center gap-2">
                {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  to={social.to}
                  target="_blank"
                  className="h-[35px] w-[35px] rounded-full  border border-gray-300 flex items-center justify-center hover:bg-primary-color  transition-all"
                >
                  <div className="text-[20px] hover:text-white text-gray-600 ">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </ul>
            <p className="text-[13px] text-center mb-0">
                © 2025 - Ecommerce Template
            </p>
            <div className="flex items-center">
                <img src="/public/carte_bleue.png" alt="" />
                <img src="/public/visa.png" alt="" />
                <img src="/public/master_card.png" alt="" />
                <img src="/public/paypal.png" alt="" />
            </div>
          </div>
    </div>

   </>
  );
};

export default Footer;