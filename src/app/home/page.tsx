"use client";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col p-2">
      <div className=" bg-white drop-shadow p-4 mt-10 lg:min-w-[900px] lg:mx-auto">
        <h1 className="text-center text-xl font-bold">ものづくりで成長する</h1>
        <div className="border-t-2" />
        <div className="text-base text-center">
          <p>
            創造力をプログラミングで育てよう。
            <br />
            「モクモクラボ」では、テクノロジーを駆使したものづくりを通して、論理的思考や問題解決能力を養います。
            <br />
            楽しみながら新しいスキルを身につけ、アイデアをカタチにする楽しさを味わいましょう。
          </p>
        </div>
      </div>
      <div className="bg-white drop-shadow p-4 mt-10 lg:min-w-[900px] lg:mx-auto">
        <h1 className="text-center text-xl font-bold">アクセス・住所</h1>
        <div className="border-t-2" />
        <div className="flex flex-col justify-center">
          <p className="text-center pb-2">伊豆伊東高校(旧 伊東商業高校) 近く</p>
          <Link
            className="mx-auto text-center text-lg font-bold text-blue-500 underline underline-offset-auto hover:text-orange-300 translate-all duration-300"
            href="https://maps.app.goo.gl/kPCgvpgP3QKREMFX8"
            target="_blank"
            onClick={() => sendGAEvent("event", "map_link_on_home")}
          >
            Google マップで開く
            <ArrowTopRightOnSquareIcon className="inline-block h-7 mb-1.5"></ArrowTopRightOnSquareIcon>
          </Link>
          <div className="w-full h-96 flex justify-center">
            <iframe
              title="モクモクラボの場所"
              className="top-0 left-0 w-full lg:w-[850px] h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1611.353773435977!2d139.11468402264128!3d34.944728694692664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019c34ee6501d35%3A0xf427498360befb2f!2z44Oi44Kv44Oi44Kv44Op44Oc!5e0!3m2!1sja!2sjp!4v1715874024381!5m2!1sja!2sjp"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bg-white drop-shadow p-4 mt-10 lg:min-w-[900px] lg:max-w-[813px] lg:mx-auto">
        <h1 className="text-center text-xl font-bold">どんなところ？</h1>
        <div className="border-t-2" />
        <div className="text-base text-center">
          <p className="whitespace-normal">
            経験豊富な現役エンジニアが、各自それぞれのスキルや興味に合わせたコーチングを行うことで、
            本格的なプログラミングを学ぶことができます。自分のペースで学びを探求し成長できるクラブです。
            科学や技術に興味がある方や、好奇心旺盛な方、コンピュータやプログラミングに興味がある方に最適です。
            技術を学びたい方やスキルを磨きたい方の参加をお待ちしています！
          </p>
          <p className="text-center text-sm">※想定対象: 小・中・高校生</p>
        </div>
      </div>
      <div className="bg-white drop-shadow p-4 mt-10 lg:min-w-[900px] lg:mx-auto">
        <h1 className="text-center text-xl font-bold">顧問紹介</h1>
        <div className="border-t-2" />
        <h1 className="text-center text-lg font-bold">経歴</h1>
        <ul className="list-outside text-center">
          <li>島根大学大学院修士課程修了</li>
          <li>メガベンチャーのシステムエンジニア</li>
        </ul>
        <h1 className="text-center text-lg font-bold">資格</h1>
        <ul className="list-outside text-center">
          <li>中学校教諭一種免許(数学)</li>
          <li>高等学校教諭一種免許(数学)</li>
          <li>高等学校教諭専修免許(情報)</li>
        </ul>
      </div>
      <div className="bg-white drop-shadow p-4 mt-10 lg:min-w-[900px] lg:mx-auto">
        <h1 className="text-center text-xl font-bold">料金</h1>
        <div className="border-t-2" />
        <div className="mt-2">
          <p className="text-center">
            入会金なし(パソコンなどの機材も原則こちらで用意します)
          </p>
          <p className="text-center font-medium">
            月4回×3時間 月額30,000円(税込33,000円)
          </p>
        </div>
      </div>
      <div className="bg-white drop-shadow p-4 mt-10 lg:min-w-[900px] lg:mx-auto">
        <h1 className="text-center text-xl font-bold">体験・入会</h1>
        <div className="border-t-2" />
        <div className="flex flex-col justify-center">
          <p className="text-center pb-1">
            体験・入会希望者は、体験・入会リンクからお申込みください。
          </p>
          <p className="text-center text-sm pb-2">
            ※体験日時は、希望日を踏まえて、抽選結果を後日お送りいたします。
          </p>
          <Link
            className="mx-auto text-center text-lg font-bold text-blue-500 underline underline-offset-auto hover:text-orange-300 translate-all duration-300"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfAJmWtPVwwgIHfu-C7jLlpB_q_KyWOI17qMMA0vRU-dTDaYw/viewform?usp=sf_link"
            target="_blank"
            onClick={() => sendGAEvent("event", "entry_link_on_home")}
          >
            体験・入会 お申込みフォーム
            <ArrowTopRightOnSquareIcon className="inline-block h-7 mb-1.5"></ArrowTopRightOnSquareIcon>
          </Link>
        </div>
      </div>
    </div>
  );
}
