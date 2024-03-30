import Image from "next/image";
import MokumokulabFullLogo from "@/assets/logo/mokumokulab-full-logo.png";

const logo = {
  width: 101,
  height: 13,
};
const logoMagnification = 6;

const Header = () => {
  return (
    <header className="bg-blue-50 p-4 flex justify-center">
      <div>
        <div>
          <Image
            src={MokumokulabFullLogo}
            alt="Mokumokulab Log"
            width={logo.width * logoMagnification}
            height={logo.height * logoMagnification}
          ></Image>
        </div>
        <nav className="p-2 flex justify-around mx-auto container items-center">
          <div className="space-x-12 font-bold">
            <a
              href="/home"
              className="hover:text-green-200 translate-all duration-300"
            >
              ホーム
            </a>
            <a
              href="/tuition"
              className="hover:text-green-200 translate-all duration-300"
            >
              料金
            </a>
            <a
              href="/access"
              className="hover:text-green-200 translate-all duration-300"
            >
              アクセス
            </a>
            <a
              href="/contact"
              className="hover:text-green-200 translate-all duration-300"
            >
              お問い合わせ
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
