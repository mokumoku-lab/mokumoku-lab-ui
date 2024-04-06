import Image from "next/image";
import MokumokulabFullLogo from "@/assets/logo/mokumokulab-full-logo.png";
import Link from "next/link";

const logo = {
  width: 101,
  height: 13,
};
const logoMagnification = 6;

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 pt-5 px-2 pb-2 flex justify-center">
      <div>
        <div>
          <Image
            src={MokumokulabFullLogo}
            alt="Mokumokulab Log"
            property="true"
            width={logo.width * logoMagnification}
            height={logo.height * logoMagnification}
          ></Image>
        </div>
        <nav className="pt-3 flex justify-around mx-auto container items-center">
          <div className="space-x-6 font-bold">
            <Link
              href="/home"
              className="hover:text-green-200 translate-all duration-300"
            >
              ホーム
            </Link>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfAJmWtPVwwgIHfu-C7jLlpB_q_KyWOI17qMMA0vRU-dTDaYw/viewform?usp=sf_link"
              className="after:content-['_↗'] bg-blue-500 text-white py-1 px-2 rounded-md hover:text-green-200 translate-all duration-300"
              target="_blank"
            >
              体験・入会する
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
