import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import "../../styles/globals.css";
import Feature from "../feature/page";
import "../../styles/style.css";
import Logo from "../../../public/logo.svg";

export default function Navbar() {
  return (
    <nav className="bg-green-50 py-6 px-32 flex justify-between items-center space-x-32 overflow-visible">
      <div className="text-green-600 text-4xl font-bold">NexusCo.</div>
      <div className="flex space-x-4">
        <Link
          href="/"
          className="text-lg text-green-600 hover:text-gray-900 font-bold"
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className="text-lg text-green-600 hover:text-gray-900 font-bold"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="text-lg text-green-600 hover:text-gray-900 font-bold"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
