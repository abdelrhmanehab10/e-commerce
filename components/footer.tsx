import { Facebook, Instagram, Twitter } from "lucide-react";
import SubscribeForm from "./forms/subscribe-form";

const listItems = [
  {
    header: "Company Info",
    items: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    header: "Features",
    items: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="p-3">
      <h1 className="font-bold text-xl">SwiftMarket</h1>
      <ul className="flex gap-6 my-2">
        <li className="cursor-pointer text-[#23A6F0] hover:text-[#23A6F0]/80">
          <Facebook />
        </li>
        <li className="cursor-pointer text-[#23A6F0] hover:text-[#23A6F0]/80">
          <Instagram />
        </li>
        <li className="cursor-pointer text-[#23A6F0] hover:text-[#23A6F0]/80">
          <Twitter />
        </li>
      </ul>

      {listItems.map((ls) => (
        <div key={ls.header} className="py-5">
          <h6 className="font-bold">{ls.header}</h6>
          <ul>
            {ls.items.map((item, idx) => (
              <li
                key={idx}
                className="cursor-pointer text-sm font-bold text-gray-500"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h6 className="font-bold">Get In Touch</h6>
        <SubscribeForm />
      </div>
    </footer>
  );
};

export default Footer;
