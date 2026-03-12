export default function Page() {
  const businessHours = [
    { day: '星期一', time: '11:30–15:00 / 16:30–22:00', open: true },
    { day: '星期二', time: '11:30–15:00 / 16:30–22:00', open: true },
    { day: '星期三', time: '11:30–15:00 / 16:30–22:00', open: true },
    { day: '星期四', time: '11:30–15:00 / 16:30–22:00', open: true },
    { day: '星期五', time: '休息', open: false },
    { day: '星期六', time: '休息', open: false },
    { day: '星期日', time: '11:30–15:00 / 16:30–22:00', open: true },
  ];

  const spaghettiItems = [
    { name: '奶油（培根／燻雞／香腸）義大利麵', price: '$160' },
    { name: '奶油野菇燻雞義大利麵', price: '$200' },
    { name: '奶油松露野菇義大利麵', price: '$200' },
    { name: '奶油煙燻鮭魚義大利麵', price: '$200' },
    { name: '奶油蛤蜊義大利麵', price: '$220' },

    { name: '青醬（培根／燻雞／香腸）義大利麵', price: '$160' },
    { name: '青醬牛丸義大利麵', price: '$200' },
    { name: '青醬野菇燻雞義大利麵', price: '$200' },
    { name: '青醬煙燻鮭魚義大利麵', price: '$200' },
    { name: '青醬蛤蜊義大利麵', price: '$220' },

    { name: '經典肉醬義大利麵', price: '$140' },
    { name: '起司肉醬義大利麵', price: '$160' },
    { name: '茄汁（培根／燻雞／香腸）義大利麵', price: '$160' },
    { name: '茄汁野菇義大利麵', price: '$160' },
    { name: '茄汁煙燻鮭魚義大利麵', price: '$200' },
    { name: '茄汁蛤蜊義大利麵', price: '$220' },

    { name: '蒜辣義大利麵', price: '$140' },
    { name: '蒜辣（培根／燻雞／香腸）義大利麵', price: '$160' },
    { name: '蒜辣蛤蜊義大利麵', price: '$220' },
    { name: '蒜辣麵佐脆皮炸雞腿', price: '$240' },

    { name: '泰式酸辣（培根／香腸）義大利麵', price: '$160' },
    { name: '白酒蛤蜊義大利麵', price: '$200' },
    { name: '橄欖油時蔬義大利麵（純素）', price: '$160' },
    { name: '塔香野菇義大利麵（純素）', price: '$160' },
    { name: '番茄野菇義大利麵（蛋奶素）', price: '$160' },
  ];

  const penneItems = [
    { name: '經典肉醬筆管麵', price: '$150' },
    { name: '起司肉醬筆管麵', price: '$170' },
    { name: '奶油（培根／燻雞／香腸）筆管麵', price: '$170' },
    { name: '青醬（培根／燻雞／香腸）筆管麵', price: '$170' },
    { name: '茄汁（培根／燻雞／香腸）筆管麵', price: '$170' },
  ];

  const riceItems = [
    { name: '奶油（培根／燻雞／香腸）燉飯', price: '$160' },
    { name: '青醬（培根／燻雞／香腸）燉飯', price: '$160' },
    { name: '茄汁（培根／燻雞／香腸）燉飯', price: '$160' },
    { name: '蒜香（培根／燻雞／香腸）燉飯', price: '$160' },
    { name: '奶油野菇燉飯', price: '$160' },
    { name: '青醬野菇燉飯', price: '$160' },
    { name: '茄汁野菇燉飯', price: '$160' },
    { name: '奶油松露野菇燉飯', price: '$200' },
    { name: '起司辣雞燉飯', price: '$200' },
    { name: '燉飯佐脆皮炸雞腿', price: '$240' },
  ];

  const snackItems = [
    { name: '脆薯', price: '$50' },
    { name: '洋蔥圈', price: '$50' },
    { name: '辣味薯球', price: '$50' },
    { name: '地瓜條', price: '$50' },
    { name: '雞塊', price: '$50' },
    { name: '卡啦腿排', price: '$50' },
    { name: '檸檬雞柳條', price: '$50' },
    { name: '雞米花', price: '$50' },
    { name: '辣味雞米花', price: '$50' },
    { name: '雙色QQ球', price: '$50' },
    { name: '魷米花', price: '$60' },
  ];

  const drinkItems = [
    { name: '紅茶（冰／熱）', price: '$35' },
    { name: '綠茶（冰／熱）', price: '$35' },
    { name: '可樂', price: '$35' },
    { name: '雪碧', price: '$35' },
    { name: '檸檬紅茶', price: '$35' },
    { name: '冰咖啡', price: '$35' },
    { name: '鮮奶茶', price: '$50' },
    { name: '鮮奶綠', price: '$50' },
    { name: '鴛鴦奶茶', price: '$50' },
  ];

  const soupItems = [{ name: '玉米濃湯', price: '$50' }];

  const features = [
    {
      title: '溫馨小店感',
      desc: '用柔和的配色與圓角卡片，讓網站看起來像巷弄裡的可愛餐館。',
      icon: '🏡',
    },
    {
      title: '菜單一眼看懂',
      desc: '把義大利麵、筆管麵、燉飯、點心、飲料分開呈現，客人看起來更舒服。',
      icon: '📖',
    },
    {
      title: '資訊完整好用',
      desc: '地址、電話、營業時間直接放在前面，對店家實際使用很有幫助。',
      icon: '☎️',
    },
  ];

  const MenuSection = ({ title, subtitle, items }) => (
    <section className="rounded-[28px] border border-[#eadccf] bg-white/90 p-6 shadow-sm md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-extrabold text-[#5a4334]">{title}</h3>
          {subtitle && <p className="mt-2 text-sm text-[#8b6f5a]">{subtitle}</p>}
        </div>
        <span className="rounded-full bg-[#fff0e7] px-4 py-2 text-sm font-semibold text-[#c7744d]">
          MENU
        </span>
      </div>

      <div className="grid gap-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-2xl bg-[#fffaf6] px-4 py-3 transition hover:scale-[1.01]"
          >
            <p className="pr-4 text-[15px] font-medium leading-6 text-[#5b473a]">
              {item.name}
            </p>
            <span className="shrink-0 rounded-full bg-[#ffe4d5] px-3 py-1 text-sm font-bold text-[#b85e36]">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <main className="min-h-screen bg-[#fff8f2] text-[#5a4334]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#f0dfd2] bg-gradient-to-b from-[#fff4eb] via-[#fff8f2] to-[#fffaf6]">
        <div className="absolute left-[-80px] top-[-60px] h-52 w-52 rounded-full bg-[#ffd9c7]/50 blur-3xl" />
        <div className="absolute bottom-[-70px] right-[-60px] h-56 w-56 rounded-full bg-[#ffe9d8]/70 blur-3xl" />

        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-4 inline-block rounded-full bg-[#ffe7da] px-4 py-2 text-sm font-semibold text-[#c46d45]">
                ✨ 可愛溫馨版餐廳網站提案
              </p>

              <h1 className="text-4xl font-extrabold leading-tight text-[#4f3a2f] md:text-6xl">
                亞米小廚
                <br />
                <span className="text-[#c86f47]">Yummy Kitchenette</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#7a6150] md:text-lg">
                在信義區巷弄裡，提供讓人感到舒服的義大利麵、燉飯、點心與飲品。
                這版網站改成更可愛、更溫暖，適合拿去給店家看，也適合日後直接上線使用。
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:0227652332"
                  className="rounded-full bg-[#c86f47] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:scale-[1.03]"
                >
                  立即來電
                </a>
                <a
                  href="#menu"
                  className="rounded-full border border-[#edcdb8] bg-white px-6 py-3 text-sm font-bold text-[#6a4f3f] transition hover:bg-[#fff3eb]"
                >
                  查看菜單
                </a>
              </div>

              <div className="mt-8 space-y-2 text-sm leading-7 text-[#7d6556]">
                <p>📍 台北市信義區永吉路30巷101弄16號</p>
                <p>📞 02-2765-2332</p>
                <p>🍚 加飯 +10 ／ 加麵 +20</p>
                <p>🌶️ 餐點如需加辣，點餐時可先告知</p>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#f1ddd0] bg-white/90 p-6 shadow-lg md:p-8">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-extrabold text-[#5a4334]">今日店鋪資訊</h2>
                <span className="rounded-full bg-[#fff0e7] px-3 py-1 text-xs font-bold text-[#c7744d]">
                  OPEN INFO
                </span>
              </div>

              <div className="space-y-3">
                {businessHours.map((item) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 ${
                      item.open ? 'bg-[#fff8f3]' : 'bg-[#f7f1ed]'
                    }`}
                  >
                    <span className="font-semibold">{item.day}</span>
                    <span
                      className={`text-sm font-medium ${
                        item.open ? 'text-[#7a6150]' : 'text-[#b07d67]'
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#fff1e7] p-4 text-sm leading-7 text-[#7a6150]">
                <p className="font-semibold text-[#b45f39]">小提醒</p>
                <p>內用每人低消 100 元（不得合併計算）。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="mb-8">
          <p className="text-sm font-bold tracking-[0.18em] text-[#ca7750]">WHY THIS VERSION</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">這版網站的設計方向</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-[#ecdccf] bg-white p-6 shadow-sm"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-[#5a4334]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#7a6454]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu intro */}
      <section id="menu" className="border-y border-[#f0dfd2] bg-[#fffdfb]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold tracking-[0.18em] text-[#ca7750]">OUR MENU</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">菜單精選</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#7a6454]">
              我把你提供的菜單內容整理成網站版面，讓客人不用看整張紙本菜單，
              也能快速找到想吃的分類。
            </p>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-[#fff1e7] p-5 text-center shadow-sm">
              <p className="text-sm font-semibold text-[#b5623d]">加點提醒</p>
              <p className="mt-2 text-lg font-bold">加飯 +10 / 加麵 +20</p>
            </div>
            <div className="rounded-3xl bg-[#fff7ee] p-5 text-center shadow-sm">
              <p className="text-sm font-semibold text-[#b5623d]">套餐 A</p>
              <p className="mt-2 text-lg font-bold">+70</p>
              <p className="mt-2 text-sm text-[#7a6454]">35元飲料 + 50元點心 或 35元飲料 + 玉米濃湯</p>
            </div>
            <div className="rounded-3xl bg-[#fff1e7] p-5 text-center shadow-sm">
              <p className="text-sm font-semibold text-[#b5623d]">套餐 B</p>
              <p className="mt-2 text-lg font-bold">+110</p>
              <p className="mt-2 text-sm text-[#7a6454]">35元飲料 + 50元點心 + 玉米濃湯</p>
            </div>
          </div>

          <div className="grid gap-8">
            <MenuSection
              title="義大利麵"
              subtitle="經典奶油、青醬、茄汁、蒜辣、白酒與素食口味"
              items={spaghettiItems}
            />

            <div className="grid gap-8 md:grid-cols-2">
              <MenuSection
                title="筆管麵"
                subtitle="適合喜歡更有口感的麵體"
                items={penneItems}
              />
              <MenuSection
                title="燉飯"
                subtitle="奶油、青醬、茄汁、蒜香與主廚特餐"
                items={riceItems}
              />
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <MenuSection title="點心" subtitle="適合搭配主餐一起分享" items={snackItems} />
              <MenuSection title="飲料" subtitle="紙本菜單飲料折 10 元" items={drinkItems} />
              <MenuSection title="湯品" subtitle="暖暖的搭配選擇" items={soupItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Store info */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[30px] border border-[#ecdccf] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold tracking-[0.18em] text-[#ca7750]">STORE INFO</p>
            <h2 className="mt-3 text-3xl font-extrabold">店家資訊</h2>

            <div className="mt-6 space-y-4 text-[15px] leading-8 text-[#755f51]">
              <p><span className="font-bold text-[#5a4334]">店名：</span>亞米小廚 Yummy Kitchenette</p>
              <p><span className="font-bold text-[#5a4334]">地址：</span>台北市信義區永吉路30巷101弄16號</p>
              <p><span className="font-bold text-[#5a4334]">電話：</span>02-2765-2332</p>
              <p><span className="font-bold text-[#5a4334]">營業日：</span>星期日～星期四</p>
              <p><span className="font-bold text-[#5a4334]">公休日：</span>星期五、星期六</p>
              <p><span className="font-bold text-[#5a4334]">低消：</span>內用每人低消 100 元（不得合併計算）</p>
            </div>
          </div>

          <div className="rounded-[30px] bg-[#c86f47] p-8 text-white shadow-lg">
            <p className="text-sm font-bold tracking-[0.18em] text-white/80">BRAND FEEL</p>
            <h2 className="mt-3 text-3xl font-extrabold">可愛溫馨版的氣質</h2>

            <p className="mt-6 leading-8 text-white/90">
              這一版不像高級餐廳那麼正式，而是把亞米小廚做成
              「讓人想走進去坐下吃飯」的感覺。
              用比較柔和的顏色、圓角設計和乾淨的排版，
              會很適合這種巷弄裡的舒服小店。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:0227652332"
                className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#c86f47]"
              >
                撥打電話
              </a>
              <a
                href="https://maps.google.com/?q=台北市信義區永吉路30巷101弄16號"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white"
              >
                查看地圖
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#f0dfd2] bg-[#fff3eb]">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-[#7a6454] md:px-10">
          <p className="font-bold text-[#5a4334]">亞米小廚 Yummy Kitchenette</p>
          <p className="mt-2">台北市信義區永吉路30巷101弄16號 ｜ 02-2765-2332</p>
          <p className="mt-2">Cute & warm restaurant website concept.</p>
        </div>
      </footer>
    </main>
  );
}