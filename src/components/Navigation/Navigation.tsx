"use client";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { sendGAEvent } from "@next/third-parties/google";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 p-2 w-full bg-white border-b-2 flex justify-around mx-auto">
      <div className="space-x-6 font-bold">
        <Link
          href="/home"
          className="hover:text-orange-300 translate-all duration-300"
          onClick={() =>
            sendGAEvent({
              event: "clickedLink",
              value: "homeLinkOnNavigation",
            })
          }
        >
          ホーム
        </Link>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfAJmWtPVwwgIHfu-C7jLlpB_q_KyWOI17qMMA0vRU-dTDaYw/viewform?usp=sf_link"
          className="font-bold bg-blue-500 text-white py-2 px-2 rounded-md  hover:bg-orange-500 hover:underline translate-all duration-300"
          target="_blank"
          onClick={() =>
            sendGAEvent({
              event: "clickedLink",
              value: "entryLinkOnNavigation",
            })
          }
        >
          体験・入会する
          <ArrowTopRightOnSquareIcon className="inline-block h-6 mb-1"></ArrowTopRightOnSquareIcon>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
