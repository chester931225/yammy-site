export default function Page() {
  const menuItems = [
    {
      name: '白酒蛤蜊義大利麵',
      price: '$180',
      desc: '清爽蒜香與蛤蜊鮮味，是很多人會點的經典口味。',
    },
    {
      name: '奶油培根義大利麵',
      price: '$170',
      desc: '口味濃郁、接受度高，適合第一次來的客人。',
    },
    {
      name: '青醬雞肉義大利麵',
      price: '$190',
      desc: '羅勒香氣明顯，搭配雞肉吃起來很有層次。',
    },
    {
      name: '番茄辣炒豬肉飯',
      price: '$145',
      desc: '帶點微辣與番茄香，走開胃下飯路線。',
    },
    {
      name: '椰汁雞肉飯',
      price: '$150',
      desc: '醬汁溫和順口，適合喜歡南洋風味的客人。',
    },
    {
      name: '炸雞翅拼盤',
      price: '$135',
      desc: '很適合和主餐一起搭配，增加整體飽足感。',
    },
  ];

  const highlights = [
    {
      title: '平價又有份量',
      desc: '餐點價格親切，午餐、晚餐都很適合，學生和上班族都容易接受。',
    },
    {
      title: '義大利麵與飯類都有',
      desc: '不只可以吃到經典義大利麵，也有飯類和小點，選擇更完整。',
    },
    {
      title: '巷弄裡的舒服小店',
      desc: '店面溫馨簡單，很適合朋友聚餐或下班後來吃一餐。',
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#3d3128]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#e7ded2] bg-gradient-to-b from-[#f4ede3] to-[#f8f5ef]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-3 inline-block rounded-full bg-[#d96c4f]/10 px-4 py-1 text-sm font-medium text-[#b65237]">
              Yummy Kitchenette ・ 信義區巷弄餐館
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              亞米小廚
              <br />
              <span className="text-[#b65237]">Yummy Kitchenette</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5b4b3f] md:text-lg">
              在信義區巷弄裡，用平實價格提供讓人想再回訪的義大利麵、飯類與小點。
              不需要太正式，也能好好吃一餐。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:0227652332"
                className="rounded-2xl bg-[#b65237] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
              >
                立即來電
              </a>
              <a
                href="#menu"
                className="rounded-2xl border border-[#ccb8a5] bg-white px-6 py-3 text-sm font-semibold text-[#4a3d33] transition hover:bg-[#f6f0e8]"
              >
                查看人氣餐點
              </a>
            </div>

            <div className="mt-8 text-sm leading-7 text-[#6a584b]">
              <p>地址｜台北市信義區永吉路30巷101弄16號</p>
              <p>電話｜(02) 2765-2332</p>
              <p>營業時間｜建議來店前先電話確認最新時段</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#b65237]">
            WHY PEOPLE LIKE IT
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">這家店適合怎麼呈現</h2>
          <p className="mt-4 max-w-2xl leading-8 text-[#5e5146]">
            亞米小廚的魅力不是昂貴，而是「舒服、實在、好入口」。
            所以網站也不走浮誇路線，而是用簡潔設計把餐點與店家氛圍呈現出來。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#65574c]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="border-y border-[#e7ded2] bg-[#fcfaf6]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="mb-10">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#b65237]">
              POPULAR PICKS
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">人氣餐點示意</h2>
            <p className="mt-4 max-w-2xl leading-8 text-[#5e5146]">
              這裡先用網站展示版的方式放上代表性品項。
              之後你可以再把店家的正式菜單名稱、價格、照片全部換成最新版。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="rounded-full bg-[#eef3ea] px-3 py-1 text-sm font-bold text-[#556b4f]">
                    {item.price}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-[#65574c]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Info */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-[#eadfce] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#b65237]">
              STORE INFO
            </p>
            <h2 className="mt-3 text-3xl font-bold">店家資訊</h2>

            <div className="mt-6 space-y-4 text-[15px] leading-8 text-[#5d5045]">
              <p><span className="font-semibold text-[#3d3128]">店名：</span>亞米小廚 Yummy Kitchenette</p>
              <p><span className="font-semibold text-[#3d3128]">地址：</span>台北市信義區永吉路30巷101弄16號</p>
              <p><span className="font-semibold text-[#3d3128]">電話：</span>(02) 2765-2332</p>
              <p><span className="font-semibold text-[#3d3128]">類型：</span>義大利麵、飯類、小點、飲品</p>
              <p><span className="font-semibold text-[#3d3128]">提醒：</span>營業時間與菜單內容可能調整，建議先來電確認。</p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#b65237] p-8 text-white shadow-sm">
            <p className="text-sm font-semibold tracking-[0.2em] text-white/80">
              BRAND MESSAGE
            </p>
            <h2 className="mt-3 text-3xl font-bold">適合店家看的提案方向</h2>
            <p className="mt-6 leading-8 text-white/90">
              這個網站不是做成大型連鎖餐廳那種很距離感的風格，
              而是強調「巷弄好店」、「平價好吃」、「容易讓人記住」。
              對店家來說，這種網站很適合拿來放在 Google 商家、IG 個人簡介，
              或讓客人快速看到地址、電話、招牌餐點與整體感覺。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:0227652332"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#b65237]"
              >
                撥打電話
              </a>
              <a
                href="https://maps.google.com/?q=台北市信義區永吉路30巷101弄16號"
                className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white"
              >
                查看地圖
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e7ded2] bg-[#f3ece2]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-[#6b5a4d] md:px-10">
          <p className="font-semibold text-[#3d3128]">亞米小廚 Yummy Kitchenette</p>
          <p>台北市信義區永吉路30巷101弄16號 ｜ (02) 2765-2332</p>
          <p>Website concept design for restaurant presentation.</p>
        </div>
      </footer>
    </main>
  );
}