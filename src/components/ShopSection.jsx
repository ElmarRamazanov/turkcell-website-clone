import { useState } from "react";


const socialMediaIconUrls = {
  facebook: "https://www.kktcell.com//Files/shop/packages/2023/Fayda_ikonlari/v2/fb_ikon.png",
  instagram: "https://www.kktcell.com//Files/shop/packages/2023/Fayda_ikonlari/v2/insta_ikon.png",
  whatsapp: "https://www.kktcell.com//Files/shop/packages/2023/Fayda_ikonlari/v2/whatsapp_ikon.png",
  tiktok: "https://www.kktcell.com//Files/shop/packages/2023/Fayda_ikonlari/v2/tiktok_ikon.png",
  spotify: "https://www.kktcell.com//Files/shop/packages/2023/Fayda_ikonlari/v2/spotify_ikon.png",
  youtube: "https://www.kktcell.com//Files/shop/packages/2023/Fayda_ikonlari/v2/youtube_ikon.png",
};

function ShopSection() {

  const homeInternetData = [
    {
      packetName: "Standart Paket 10Mbps",
      packetType: "Faturalı",
      speed: "10",
      speedUnit: "MBPS",
      description: "Rahat Ev Kullanıcıları için ideal",
      price: "699",
      priceUnit: "TL/AY",
      subscriptionType: "YILLIK ABONELIK"
    },
    {
      packetName: "Aile Paketi 20Mbps",
      packetType: "Faturalı",
      speed: "20",
      speedUnit: "MBPS",
      description: "Aileler için ideal",
      price: "799",
      priceUnit: "TL/AY",
      subscriptionType: "YILLIK ABONELIK"
    },
    {
      packetName: "Pro Paket",
      packetType: "Faturalı",
      speed: "50",
      speedUnit: "MBPS",
      description: "Uzaktan Çalışanlar için ideal",
      price: "1099",
      priceUnit: "TL/AY",
      subscriptionType: "YILLIK ABONELIK"
    }
  ]

  const packetData = [
    {
      packetName: "GO - S Digital + 5GB",
      packetType: "Faturasiz",
      internetAmount: "15",
      internetGB: "GB",
      internetDescription: "internet",
      socialMediaAmount: "15",
      socialMediaGB: "GB",
      socialMediaDescription: "Sosyal Medyada Gecerli Internet",
      callAmount: "250",
      callTime: "dk",
      callDescription: "yurt ici, Turkiye ve yurt disi yonlerine*",
      socialMediaIcons: ["facebook", "instagram", "whatsapp"],
      price: "1.339",
      priceUnit: "TL/AY",
      subscriptionType: "AYLIK ABONELIK",
      badge: "GB Hediyeli"
    },
    {
      packetName: "GO - M Digital + 5GB",
      packetType: "Faturasiz",
      internetAmount: "25",
      internetGB: "GB",
      internetDescription: "internet",
      socialMediaAmount: "20",
      socialMediaGB: "GB",
      socialMediaDescription: "Sosyal Medyada Gecerli Internet",
      callAmount: "500",
      callTime: "dk",
      callDescription: "yurt ici, Turkiye ve yurt disi yonlerine*",
      socialMediaIcons: ["facebook", "instagram", "whatsapp", "tiktok", "spotify"],
      price: "1.499",
      priceUnit: "TL/AY",
      subscriptionType: "AYLIK ABONELIK",
      badge: "GB Hediyeli"
    },
    {
      packetName: "GO - L Digital + 5GB",
      packetType: "Faturasiz",
      internetAmount: "35",
      internetGB: "GB",
      internetDescription: "internet",
      socialMediaAmount: "30",
      socialMediaGB: "GB",
      socialMediaDescription: "Sosyal Medyada Gecerli Internet",
      callAmount: "600",
      callTime: "dk",
      callDescription: "yurt ici, Turkiye ve yurt disi yonlerine*",
      socialMediaIcons: ["instagram", "facebook", "spotify", "youtube", "tiktok", "whatsapp"],
      price: "1.619",
      priceUnit: "TL/AY",
      subscriptionType: "AYLIK ABONELIK",
      badge: "GB Hediyeli"
    }
  ]


  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("ev");


  return (
    <section className="w-[1905px] h-150">
      <div className="mx-auto my-5 flex items-center justify-center gap-16">
        <h1
          onClick={() => setActiveTab("ev")}
          className={`relative pb-1 text-xl font-bold cursor-pointer ${activeTab === "ev"
            ? "text-[#0C4BA0] border-b-4 border-[#0C4BA0]"
            : "text-[#50545B] border-b-4 border-transparent"
            }`}
        >
          TURKCELL EV INTERNETI
          {activeTab === "ev" && (
            <span className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-r-20 border-l-20 border-t-12 border-r-transparent border-l-transparent border-t-[#0C4BA0]" />
          )}
        </h1>
        <h1
          onClick={() => setActiveTab("tarife")}
          className={`relative pb-1 text-xl font-bold cursor-pointer ${activeTab === "tarife"
            ? "text-[#0C4BA0] border-b-4 border-[#0C4BA0]"
            : "text-[#50545B] border-b-4 border-transparent"
            }`}
        >
          TARIFE VE PAKETLER
          {activeTab === "tarife" && (
            <span className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-r-20 border-l-20 border-t-12 border-r-transparent border-l-transparent border-t-[#0C4BA0]" />
          )}
        </h1>
      </div>

      {/* ==================== EV İNTERNETİ TAB ==================== */}
      {activeTab === "ev" && (
        <>
          <div className="w-305 h-110 justify-center mx-auto overflow-visible mt-10">
            <div className="w-full h-96 flex justify-between items-center">
              {homeInternetData.map((item, index) => (
                <div key={index} className="w-70 h-96 shadow-[0_8px_24px_rgba(0,0,0,0.28)] overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ease-in hover:shadow-[0_0_36px_rgba(0,0,0,0.48)]">
                  {/* Card Head */}
                  <div className="w-73 h-25.75 bg-[#0C4BA0] flex flex-col justify-center items-baseline text-white rounded-b-[100%_25px]">
                    <h4 className="text-lg font-semibold px-5">{item.packetName}</h4>
                    <span className="text-sm font-semibold px-5">{item.packetType}</span>
                  </div>
                  {/* Card Body */}
                  <div className="w-70 h-44.25 bg-white px-4 relative flex flex-col">
                    <div>
                      <div className="w-62 h-[74.92px] mt-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true" role="img" viewBox="0 0 24 24" className="h-[19pt] w-[19pt] align-middle" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" d="M12 6c3.537 0 6.837 1.353 9.293 3.809l1.414-1.414C19.874 5.561 16.071 4 12 4c-4.071.001-7.874 1.561-10.707 4.395l1.414 1.414C5.163 7.353 8.463 6 12 6m5.671 8.307c-3.074-3.074-8.268-3.074-11.342 0l1.414 1.414c2.307-2.307 6.207-2.307 8.514 0z" /><path fill="currentColor" d="M20.437 11.293c-4.572-4.574-12.301-4.574-16.873 0l1.414 1.414c3.807-3.807 10.238-3.807 14.045 0z" /><circle cx="12" cy="18" r="2" fill="currentColor" /></svg>
                        <div className="text-2xl font-semibold relative top-0 pl-0.75">
                          {item.speed}
                          <sup className="text-[11px] font-semibold relative top-0 pl-0.75">{item.speedUnit}</sup>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="w-70 h-9 bg-[#D9D9D944] border-y border-[#68686826] flex justify-baseline items-center text-[#4d4d4d] text-sm font-semibold pl-6">
                    <span className="">{item.description}</span>
                  </div>
                  {/* Card Footer */}
                  <div className="w-70 h-17 flex items-center justify-between box-border px-4">
                    <div className="w-19 h-14.25 flex flex-col mt-3 pb-3">
                      <span className="w-[66.38px] h-4.75 font-bold text-xl">
                        {item.price}
                        <sup className="text-[10px] font-semibold relative pl-0.75">{item.priceUnit}</sup>
                      </span>
                      <span className="text-[10px] whitespace-nowrap mt-2">{item.subscriptionType}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
           <div className="w-300 h-4.75 flex justify-center items-center mx-auto mt-12 mb-12">
            <a href="" className="text-[#184392] py-2 px-8 text-[12px] rounded-full border border-[#184392] cursor-pointer transition-all duration-300 ease-in hover:bg-[#184392] hover:text-white">Tümünü Göster</a>
          </div>
        </>
      )}

      {/* ==================== TARİFE VE PAKETLER TAB ==================== */}
      {activeTab === "tarife" && (
        <>
          <div className="w-305 h-105 justify-center mx-auto overflow-visible mt-10">
            <div className="w-full h-96 flex justify-between items-start gap-8">
              {packetData.map((item, index) => (
                <div key={index} className="w-70 shadow-[0_8px_24px_rgba(0,0,0,0.28)] overflow-hidden rounded-xl bg-white flex flex-col cursor-pointer transition-all duration-300 ease-in hover:shadow-[0_0_36px_rgba(0,0,0,0.48)]">
                  {/* Card Header - Yellow */}
                  <div className="relative bg-[#FFE600] px-5 pt-4 pb-7 rounded-b-[100%_20px]">
                    {/* Badge */}
                    <span className="absolute text-[10px] font-bold top-0 right-0 w-23 h-7 bg-[#bc2063] text-white px-3 py-1 rounded-bl-md whitespace-nowrap flex justify-center items-center">
                      {item.badge}
                    </span>
                    <h4 className="text-[16px] font-bold text-[#1a1a1a] leading-tight">{item.packetName}</h4>
                    <span className="text-[12px] text-[#666]">{item.packetType}</span>
                  </div>

                  {/* Card Body */}
                  <div className=" pt-6 pb-5 flex-1 flex flex-col">
                    {/* Stats Row - 3 columns */}
                    <div className="flex items-start mb-5">
                      {/* Internet */}
                      <div className="flex flex-col items-center text-center flex-1">
                        <img className="pr-5" src="https://www.kktcell.com/Assets/Web/build/assets/images/package-icons/radio.svg" alt="" />
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-[22px] font-bold text-[#1a1a1a]">{item.internetAmount}</span>
                          <span className="text-[11px] font-semibold text-[#1a1a1a]">{item.internetGB}</span>
                        </div>
                        <span className="text-[9px] text-[#888] uppercase mt-1 leading-tight font-semibold tracking-wide">İNTERNET</span>
                      </div>

                      {/* Social Media */}
                      <div className="flex flex-col items-center text-center flex-1">
                        <img className="pr-5" src="https://www.kktcell.com/Assets/Web/build/assets/images/package-icons/radio.svg" alt="" />
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-[22px] font-bold text-[#1a1a1a]">{item.socialMediaAmount}</span>
                          <span className="text-[11px] font-semibold text-[#1a1a1a]">{item.socialMediaGB}</span>
                        </div>
                        <span className="text-[9px] text-[#888] uppercase mt-1 leading-tight font-semibold tracking-wide max-w-[65px]">SOSYAL MEDYADA GEÇERLİ İNTERNET</span>
                      </div>

                      {/* Call */}
                      <div className="flex flex-col items-center text-center flex-1">
                        <img className="pr-9" src="https://www.kktcell.com/Assets/Web/build/assets/images/package-icons/phone-call.svg" alt="" />
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-[22px] font-bold text-[#1a1a1a]">{item.callAmount}</span>
                          <span className="text-[11px] font-semibold text-[#1a1a1a]">{item.callTime.toUpperCase()}</span>
                        </div>
                        <span className="text-[9px] text-[#888] uppercase mt-1 leading-tight font-semibold tracking-wide max-w-[65px]">YURT İÇİ, TÜRKİYE VE YURT DIŞI YÖNLERİNE*</span>
                      </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-1 pl-5 mt-1 mb-5 flex-wrap pb-5">
                      {item.socialMediaIcons.map((icon, i) => (
                        <img
                          key={i}
                          src={socialMediaIconUrls[icon]}
                          alt={icon}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ))}
                    </div>

                    {/* Spacer */}
                    <div className="flex-1"></div>

                    {/* Price */}
                    <div className="w-full flex flex-col pl-5 pr-6 pt-3 border-t border-black/20 text-[#1a1a1a]">
                      <div className="flex items-baseline">
                        <span className="text-[22px] font-bold">{item.price}</span>
                        <sup className="text-[10px] font-semibold pl-1">{item.priceUnit}</sup>
                      </div>
                      <span className="text-[10px] font-semibold">{item.subscriptionType}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-300 h-4.75 flex justify-center items-center mx-auto mt-12 mb-12">
            <a href="" className="text-[#184392] py-2 px-8 text-[12px] rounded-full border border-[#184392] cursor-pointer transition-all duration-300 ease-in hover:bg-[#184392] hover:text-white">Tümünü Göster</a>
          </div>
        </>
      )}
    </section>
  );
}
export default ShopSection;