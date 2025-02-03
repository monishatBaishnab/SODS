import Navbar from "@/components/navbar/Navbar";
import Latest from "./_components/Latest";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import { FaChevronRight, FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Header section containing navbar and header elements */}
      <header>
        {/* Navbar */}
        <Navbar />
      </header>
      {/* Main content sections */}
      <main>
        {/* Latest from SODS */}
        <section>
          <Latest />
        </section>
        <section className="py-10">
          <div className="container relative">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="relative col-span-1 space-y-6 md:col-span-5 bg-[rgb(105_132_29)] text-white px-12 py-16 lg:py-24">
                <h2 className="text-3xl font-bold">
                  Start Your Life in Saskatoon
                </h2>
                <p className="text-lg">
                  Saskatoon Open Door Society believes in helping newcomers get
                  settled into their new life in Canada. We strive to help both
                  immigrants and refugees feel welcome, get connected and
                  develop a sense of belonging.
                </p>
                <p className="text-lg">
                  We provide assistance at every step of the settlement journey.
                </p>
                <div className="h-16"></div>
                <div className="absolute left-12 bottom-16 lg:bottom-24 right-12">
                  <div className="relative">
                    <button className="flex items-center w-full border px-5 py-3 rounded-sm hover:bg-white/10">
                      Get Started <FaChevronRight />
                    </button>
                    <div className="p-3 m-1 bg-white rounded-full text-[rgb(105_132_29)] absolute -left-6 top-0 bottom-0">
                      <FaHome />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 md:col-span-7 relative">
                <div className="hidden md:block absolute top-0 bottom-0 -left-4 h-full overflow-hidden">
                  <Image
                    className="size-full object-contain"
                    src="https://www.sods.sk.ca/Portals/_default/Skins/saskatoon-open-door-society/images/pathways/vertical.webp"
                    alt="SODS"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="size-full overflow-hidden">
                  <Image
                    className="size-full object-contain"
                    src="https://www.sods.sk.ca/Portals/0/adam/Pathways/0Wv5mdTs1EKxvXgwpkwMTQ/Image/Saskatoon-Open-Door-Society-believes-in-helping-Newcomers.jpg?w=768&h=639&mode=crop&anchor=middlecenter"
                    alt="SODS"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 left-0 overflow-hidden">
              <Image
                className="size-full object-contain"
                src="https://www.sods.sk.ca/Portals/_default/Skins/saskatoon-open-door-society/images/pathways/top.webp"
                alt="SODS"
                width={1020}
                height={400}
              />
            </div>
            <div className="absolute bottom-0 right-0 left-0 overflow-hidden">
              <Image
                className="size-full object-contain"
                src="https://www.sods.sk.ca/Portals/_default/Skins/saskatoon-open-door-society/images/pathways/bottom.webp"
                alt="SODS"
                width={1020}
                height={400}
              />
            </div>
          </div>
        </section>
      </main>
      {/* Footer section */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
