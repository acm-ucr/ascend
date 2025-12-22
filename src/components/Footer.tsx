import Image from "next/image";
import ascendLogo from "@/public/logo.webp";
import { SiLinktree } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-10 bg-white px-6 py-10 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] md:flex-row md:items-start md:justify-between md:gap-0 md:px-32">
      <div className="order-2 flex w-full justify-center md:order-none md:w-auto md:justify-start">
        <Image
          src={ascendLogo}
          alt="Ascend Logo"
          className="w-24 sm:w-42 md:w-60"
        />
      </div>

      <div className="order-1 flex flex-col items-center text-center md:order-none md:items-start md:text-left">
        <div className="font-playfair text-3xl font-bold">Contact Us</div>

        <a
          href="mailto:ascenducr@gmail.com"
          className="mt-1 hidden underline decoration-1 md:block"
        >
          ascenducr@gmail.com
        </a>

        <div className="mt-4 flex items-center gap-8">
          <Link
            href="https://linktr.ee/AscendUCR"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-70" //ADDED HOVER
          >
            <SiLinktree size={35} />
          </Link>

          <Link
            href="https://www.linkedin.com/company/ascenducr-25"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-70" //ADDED HOVER
          >
            <FiLinkedin size={40} />
          </Link>

          <Link
            href="https://www.instagram.com/ascend_ucr/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-70" //ADDED HOVER
          >
            <FaInstagram size={40} />
          </Link>

          <a
            href="mailto:ascenducr@gmail.com"
            className="block transition hover:opacity-70 md:hidden"
          >
            <FiMail size={40} />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
