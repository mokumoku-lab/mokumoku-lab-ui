import Image from "next/image";
import MokumokulabFullLogo from "@/assets/logo/mokumokulab-full-logo.png";

const logo = {
  width: 101,
  height: 13,
};
const logoMagnification = 8;

export const Header = () => {
  return (
    <header>
      <div className="bg-white w-full pt-2 px-2 pb-1">
        <div className="h-full flex justify-center items-center">
          <div className="bg-white">
            <Image
              src={MokumokulabFullLogo}
              alt="Mokumokulab Log"
              property="true"
              width={logo.width * logoMagnification}
              height={logo.height * logoMagnification}
            ></Image>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
