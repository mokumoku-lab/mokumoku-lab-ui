export default function Home() {
  return (
    <div className="flex flex-col p-2">
      <div className=" bg-white drop-shadow p-4">
        <h1 className="text-center text-xl font-bold">ものづくりで成長する</h1>
        <div className="border-t-2"></div>
        <div className="text-base">
          <p>
            創造力をプログラミングで育てよう。「モクモクラボ」では、テクノロジーを駆使したものづくりを通して、論理的思考や問題解決能力を養います。
            メガベンチャーで実際に働く現役システムエンジニアがサポートします。
            楽しみながら新しいスキルを身につけ、アイデアをカタチにする楽しさを味わいましょう。
          </p>
        </div>
      </div>
      <div className=" bg-white drop-shadow p-4 mt-4">
        <h1 className="text-center text-xl font-bold">アクセス・住所</h1>
        <div className="border-t-2">
          <div className="flex flex-col justify-center">
            <a
              className="after:content-['_↗'] text-center underline underline-offset-auto hover:text-green-200 translate-all duration-300"
              href="https://goo.gl/maps/CF4aTrgWCr6UcRVs5"
              target="_blank"
            >
              Google マップで開く
            </a>
            <div className="relative w-full h-96">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://maps.google.co.jp/maps?ll=34.945015726264394, 139.11535928894378&amp;q=34.945015726264394, 139.11535928894378&amp;output=embed&amp;t=m&amp;z=17"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white drop-shadow p-4 mt-4">
        <h1 className="text-center text-xl font-bold">料金</h1>
        <div className="border-t-2"></div>
        <div className="mt-2">
          <p className="text-center">入会金なし</p>
          <p className="text-center">月4回×3時間 月額30,000円(税込33,000円)</p>
        </div>
      </div>
    </div>
  );
}
