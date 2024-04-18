import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

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
          <a
            className="mx-auto text-center text-lg font-bold text-blue-500 underline underline-offset-auto hover:text-orange-300 translate-all duration-300"
            href="https://goo.gl/maps/CF4aTrgWCr6UcRVs5"
            target="_blank"
          >
            Google マップで開く
            <ArrowTopRightOnSquareIcon className="inline-block h-7 mb-1.5"></ArrowTopRightOnSquareIcon>
          </a>
          <div className="w-full h-96 flex justify-center">
            <iframe
              className="top-0 left-0 w-full lg:w-[850px] h-full"
              src="https://maps.google.co.jp/maps?ll=34.945015726264394, 139.11535928894378&amp;q=34.945015726264394, 139.11535928894378&amp;output=embed&amp;t=m&amp;z=17"
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
          <li>島根大学大学院 卒業</li>
          <li>某メガベンチャーのシステムエンジニア</li>
        </ul>
        <h1 className="text-center text-lg font-bold">資格</h1>
        <ul className="list-outside text-center">
          <li>中学校教諭一種免許(数学)</li>
          <li>高等学校教諭一種免許(数学)</li>
          <li>高等学校教諭専修免許(情報)</li>
        </ul>

        <div className="flex justify-center"></div>
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
    </div>
  );
}
