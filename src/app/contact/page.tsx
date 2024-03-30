import Header from "@/components/Header/Header";

export default function Contact() {
  return (
    <body>
      <Header></Header>
      <main>
        <div className="bg-gray-200 min-h-screen">
          <div className="flex flex-col">
            <div className="p-20">
              <div className=" bg-white drop-shadow p-10">
                <h1 className="text-center text-4xl font-bold">問い合わせ</h1>
                <div className="border-t-2"></div>
                <div>
                  <p>
                    創造力をプログラミングで育てよう。「モクモクラボ」では、テクノロジーを駆使したものづくりを通して、論理的思考や問題解決能力を養います。
                    メガベンチャーで実際に働く現役システムエンジニアがサポートします。
                    楽しみながら新しいスキルを身につけ、アイデアをカタチにする楽しさを味わいましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
