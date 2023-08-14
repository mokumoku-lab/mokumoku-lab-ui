import Header from "@/components/Header/Header";

export default function Access() {
  return (
    <body>
      <Header></Header>
      <main>
        <div className="bg-gray-200 min-h-screen">
          <div className="flex flex-col">
            <div className="lg:pt-10 xl:px-36 p-0">
              <div className="bg-white drop-shadow p-10">
                <h1 className="text-center text-4xl font-bold">アクセス</h1>
                <div className="border-t-2"></div>
                <div className="pt-5"></div>
                <div className="flex justify-center">
                  <div className="box-border h-full w-full xl:w-4/5">
                    <div className="flex justify-center">
                      <a
                        className="after:content-['_↗'] underline underline-offset-auto hover:text-green-200 translate-all duration-300"
                        href="https://goo.gl/maps/CF4aTrgWCr6UcRVs5"
                        target="_blank"
                      >
                        Google マップで開く
                      </a>
                    </div>
                    <div className="pb-2"></div>
                    <div className="flex justify-center">
                      <div className="h-screen w-screen">
                        <iframe
                          className="w-full h-full"
                          src="http://maps.google.co.jp/maps?ll=34.945015726264394, 139.11535928894378&amp;q=34.945015726264394, 139.11535928894378&amp;output=embed&amp;t=m&amp;z=17"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
