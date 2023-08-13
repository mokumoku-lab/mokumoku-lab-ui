import Header from "@/components/Header/Header";

export default function Tuition() {
  return (
    <body>
      <Header></Header>
      <main>
        <div className="bg-gray-200 min-h-screen">
          <div className="flex flex-col">
            <div className="p-20">
              <div className=" bg-white drop-shadow p-10">
                <h1 className="text-center text-4xl font-bold">料金</h1>
                <div className="border-t-2"></div>
                <div>
                  <p>入会金なし</p>
                  <p>月4回×3時間 月額30,000円(税込33,000円)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
