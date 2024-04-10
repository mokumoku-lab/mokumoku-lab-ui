import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 p-2 w-full bg-white border-b-2 flex justify-around mx-auto">
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
  );
};

export default Navigation;
