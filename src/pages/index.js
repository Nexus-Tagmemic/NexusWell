import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import Asset51 from "../../public/asset-5-1.svg";
import asset61 from "../../public/asset-6-1.svg";
import Asset5 from "../../public/asset-5-2.svg";
import Asset6 from "../../public/asset-6-2.svg";
import Asset10 from "../../public/asset-10.svg";
import Asset11 from "../../public/asset-11.svg";
import Asset12 from "../../public/asset-12.svg";
import Logo from "../../public/logo.svg";
import Robot from "../../public/robot.svg";
import Navbar from "../app/components/navbar";

export default function Home() {
  return (
    <div className="bg-green-50 h-screen w-screen fixed ">
      <Head>
        <title>Landing Page</title>
      </Head>
      {/* Navbar */}
      <Navbar />
      {/* <nav className="bg-green-50 py-6 px-32 flex justify-between items-center space-x-32 overflow-visible">
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
      </nav> */}
      {/* Main content */}

      <div className="relative h-screen overflow-visible">
        <div className="absolute top-0 left-0 w-full h-full bg-green-50 overflow-visible">
          {/* <div className="flex justify-center items-center h-16 mt-10 space-x-24">
            <div className="absolute top-14 left-[195px] text-green-600 text-4xl font-bold leading-8 whitespace-nowrap">
              NexusCo.
            </div>
            <div className="text-3xl font-semibold text-green-600">Home</div>
            <div className="text-3xl font-semibold text-green-600">
              About Us
            </div>
            <div className="text-3xl font-semibold text-green-600">Contact</div>
          </div> */}
          {/* <div className="absolute top-32 left-0 w-full h-[954px]"> */}
          <div className="">
            <div>
              {/* className="absolute top-18 left-0 w-full h-[883px]" */}
              <div className="overflow-visible">
                {/* <div className="absolute top-[157px] left-0 w-full h-[726px]"> */}
                <Image
                  // big wave
                  className="relative left-0 overflow-hidden z-0"
                  alt="Asset"
                  src={Asset12}
                  layout="fill"
                  objectFit="cover"
                />
                <Image
                  className="absolute bottom-10 right-4 z-30 overflow-visible animate-bounce"
                  alt="Asset"
                  src={Robot}
                  layout="intrinsic"
                  width={680}
                  height={630}
                  objectFit="cover"
                />
                <Image
                  className="absolute bottom-0 right-0 z-10"
                  alt="Asset"
                  src={Asset11}
                  layout="fixed"
                  width={653}
                  height={298}
                  objectFit="cover"
                />

                <Image
                  className="absolute top-0 left-[909px]"
                  alt="Asset"
                  src={Asset6}
                  layout="fixed"
                  width={186}
                  height={186}
                  objectFit="cover"
                />
                <Image
                  className="absolute top-[270px] left-[600px]"
                  alt="Asset"
                  src={Asset5}
                  layout="fixed"
                  width={280}
                  height={280}
                  objectFit="cover"
                />
                <Image
                  className="absolute bottom-0 left-0"
                  alt="Asset"
                  src={Asset10}
                  layout="fixed"
                  width={839}
                  height={277}
                  objectFit="cover"
                />
                <div className="absolute flex flex-col px-32 mt-8 z-40">
                  <div className="order-1 flex flex-col space-y-9 my-4">
                    <p className="text-green-600 text-[80px] font-extrabold leading-8">
                      NEXUS
                      <br />
                    </p>
                    <p className="text-green-600 text-[80px] font-extrabold leading-8">
                      HEALTH
                    </p>
                  </div>
                  <div className="order-2 my-4">
                    <p className="top-[35px] left-[174px] w-[552px] text-green-900 text-base font-medium leading-8">
                      Nexus is an AI App Solution that offers tools for medical
                      analysis including Cataract and Glaucoma Analyzers, an
                      embedded chatbot, and an SQLite database for data storage.
                      <br />
                      It provides accurate diagnoses from medical images and
                      interactive user support, ensuring organized data
                      management.
                    </p>
                  </div>
                  <Link
                    className="flex items-center justify-center order-3 top-[223px] left-[176px] w-[177px] h-[58px] bg-green-300 rounded-lg overflow-hidden my-2 hover:scale-110"
                    href="/feature"
                  >
                    <div className="m-auto text-white text-xl font-bold whitespace-nowrap">
                      TRY NOW!
                    </div>
                  </Link>
                </div>
              </div>
              <Image
                className="absolute top-0 left-[1604px]"
                alt="Asset"
                src={Asset51}
                layout="fixed"
                width={316}
                height={316}
                objectFit="cover"
              />
            </div>
            <Image
              className="absolute top-0 left-[1362px]"
              alt="Asset"
              src={asset61}
              layout="fixed"
              width={186}
              height={186}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
