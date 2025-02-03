import Image from "next/image";
import gbb from "../../assets/government-of-sk.png";
import {
  FaExternalLinkAlt,
  FaFacebook,
  FaFax,
  FaInstagram,
  FaLinkedin,
  FaRegMap,
  FaYoutube,
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

const ColorGrid = () => {
  return (
    <div className="grid h-2 grid-cols-6" aria-hidden="true">
      <div className="bg-[#CB410B]"></div> {/* Sinopia */}
      <div className="bg-[#318CE7]"></div> {/* Bice Blue */}
      <div className="bg-[#568203]"></div> {/* Avocado */}
      <div className="bg-[#00416A]"></div> {/* Indigo Dye */}
      <div className="bg-[#FE5000]"></div> {/* Orange Pantone */}
      <div className="bg-[#9ACD32]"></div> {/* Yellow-Green */}
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <ColorGrid />
      <div className="container py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-20">
        <div>
          <div className="h-20 w-[11rem] overflow-hidden">
            <Image
              className="size-full object-contain"
              src="https://www.sods.sk.ca/Portals/0/saskatoon-open-door-society-logo.svg?ver=MYiCvRe3BLjyb8buui13uw%3d%3d"
              alt="SODS"
              width={100}
              height={100}
            />
          </div>
          <h5 className="mb-0 mt-2 text-base font-semibold text-red-800">
            Welcoming. Connecting. Belonging.
          </h5>
          <div className="h-20 w-full overflow-hidden">
            <Image
              className="size-full object-contain"
              src="https://www.sods.sk.ca/Portals/_default/skins/saskatoon-open-door-society/images/logos/3li_EnFr_Wordmark_C.svg"
              alt="SODS"
              width={600}
              height={100}
            />
          </div>
          <div className="h-20 w-full overflow-hidden">
            <Image
              className="size-full object-contain"
              src="https://www.sods.sk.ca/Portals/_default/skins/saskatoon-open-door-society/images/logos/IRCC.png"
              alt="SODS"
              width={600}
              height={100}
            />
          </div>
          <div className="h-20 w-full overflow-hidden">
            <Image
              className="size-full object-contain object-left"
              src={gbb}
              alt="SODS"
              width={600}
              height={100}
            />
          </div>
        </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-2 lg:col-span-3">
          <div className="relative space-y-4 p-7 bg-gray-50 rounded-xl h-full pb-20">
            <h5 className="mb-3 flex items-center gap-2 text-lg/tight font-bold text-black">
              <FaRegMap /> SODS 3 <sup>rd</sup> Ave
            </h5>
            <div className="text-sm cursor-pointer group space-y-2">
              <p>100 - 129 3rd Ave N. Saskatoon, SK S7K 2H4 View on map </p>
              <button className="flex items-center gap-1 group-hover:underline">
                View Map <FaExternalLinkAlt />
              </button>
            </div>

            <div className="text-sm absolute left-7 bottom-7">
              <div className="flex items-center gap-2">
                <BsTelephone /> 306-653-4464
              </div>
              <div className="flex items-center gap-2">
                <FaFax /> 306-653-4464
              </div>
            </div>
          </div>
          <div className="relative space-y-4 p-7 bg-gray-50 rounded-xl h-full pb-20">
            <h5 className="mb-3 flex items-center gap-2 text-lg/tight font-bold text-black">
              <FaRegMap /> SODS 3 <sup>rd</sup> Ave
            </h5>
            <div className="text-sm cursor-pointer group space-y-2">
              <p>100 - 129 3rd Ave N. Saskatoon, SK S7K 2H4 View on map </p>
              <button className="flex items-center gap-1 group-hover:underline">
                View Map <FaExternalLinkAlt />
              </button>
            </div>

            <div className="text-sm absolute left-7 bottom-7">
              <div className="flex items-center gap-2">
                <BsTelephone /> 306-653-4464
              </div>
              <div className="flex items-center gap-2">
                <FaFax /> 306-653-4464
              </div>
            </div>
          </div>
          <div className="relative space-y-4 p-7 bg-gray-50 rounded-xl h-full pb-20">
            <h5 className="mb-3 flex items-center gap-2 text-lg/tight font-bold text-black">
              <FaRegMap /> SODS 3 <sup>rd</sup> Ave
            </h5>
            <div className="text-sm cursor-pointer group space-y-2">
              <p>100 - 129 3rd Ave N. Saskatoon, SK S7K 2H4 View on map </p>
              <button className="flex items-center gap-1 group-hover:underline">
                View Map <FaExternalLinkAlt />
              </button>
            </div>

            <div className="text-sm absolute left-7 bottom-7">
              <div className="flex items-center gap-2">
                <BsTelephone /> 306-653-4464
              </div>
              <div className="flex items-center gap-2">
                <FaFax /> 306-653-4464
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex items-center gap-5">
            <div className="h-20 w-[6rem] overflow-hidden">
              <Image
                className="size-full object-contain"
                src="https://www.sods.sk.ca/Portals/_default/skins/saskatoon-open-door-society/images/logos/saif-sk-logo.png"
                alt="SODS"
                width={100}
                height={100}
              />
            </div>
            <p className="grow">
              Si vous êtes un nouvel arrivant francophone à Saskatoon ou dans
              toute la Saskatchewan, et que vous cherchez des services en
              français, n&apos;hésitez pas à contacter le{" "}
              <span className="text-blue-600 cursor-pointer">
                d&apos;accueil et d&apos;inclusion francophone - SK{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="container py-5 flex items-center justify-between flex-wrap">
        <div className="flex items-center gap-5 flex-wrap">
          {["Home", "Careers", "Donate", "Volunteer", "Become a Member"]?.map(
            (link) => (
              <button
                className="text-lg text-black underline transition-all decoration-black/20 decoration-2 visited:text-black hover:text-black/80 hover:decoration-black"
                key={link}
              >
                {link}
              </button>
            ),
          )}
        </div>
        <div className="flex items-center gap-1">
          <p className="m-0 hidden font-semibold lg:inline-block">
            Follow SODS on Social:
          </p>
          <button>
            <FaFacebook className="text-2xl" />
          </button>
          <button>
            <FaInstagram className="text-2xl" />
          </button>
          <button>
            <FaYoutube className="text-2xl" />
          </button>
          <button>
            <FaLinkedin className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="container py-5 flex items-center gap-5 flex-wrap">
        <p>© Saskatoon Open Door Society 2025 | All Rights Reserved</p>

        {["Terms Of Use", "Privacy Statement", "Admin Login"]?.map((link) => (
          <button
            className="text-lg text-black underline transition-all decoration-black/20 decoration-2 visited:text-black hover:text-black/80 hover:decoration-black"
            key={link}
          >
            {link}
          </button>
        ))}
      </div>
      <ColorGrid />
    </div>
  );
};

export default Footer;
