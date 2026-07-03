function SmartPhoneSection() {

const phonesData = [
{
    phoneModel: "iPhone 17 Air 256GB",
    badge: "Popüler",
    phoneImg : "https://media.kktcell.com/awh/287/215//Files/shop/content/devices/iPhone17-Air/1/153510-1_large.jpg",
    phonePrice: "7.491,50",
    priceType: "TLx 12AY",
},
{
    phoneModel: "Samsung Galaxy S24 Ultra 512GB",
    badge: "Yeni",
    phoneImg : "https://media.kktcell.com/awh/287/215//Files/shop/content/devices/Samsung_Galaxy_S26_256GB_12GB_RAM/s26_mavi.png",
    phonePrice: "5.367,50",
    priceType: "TLx 12AY",
},
{
    phoneModel: "Xiaomi Poco M8 256GB",
    badge: "Yeni",
    phoneImg : "https://media.kktcell.com/awh/287/215//Files/shop/content/devices/Xiaomi_Poco_M8_256GB_8GB_RAM/poco_yesil.png",
    phonePrice: "1.784,50",
    priceType: "TLx 12AY",
}
]

    return (
        <section className="w-full px-4">
            <div className="max-w-305 w-full mx-auto">
                <div className="w-full flex lg:flex-nowrap justify-start lg:justify-between items-stretch gap-6 overflow-x-auto pb-8 pt-4 px-4 snap-x snap-mandatory hide-scrollbar">
                    {phonesData.map((phone) => (
                        <div key={phone.phoneModel} className="shrink-0 snap-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[364.48px] flex flex-col rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.28)] overflow-hidden bg-white cursor-pointer transition-all duration-300 ease-in hover:shadow-[0_0_36px_rgba(0,0,0,0.48)]">
                            {/*Phone head*/}
                            <div className="flex items-center justify-between px-3.75 h-12.5 relative">
                                <div className="flex items-center min-w-0 font-bold pl-2 pr-20">
                                    <span className="truncate">{phone.phoneModel}</span>
                                </div>
                                <div
                                    className={`absolute top-0 right-0 w-22.5 h-12.5 flex items-center justify-center rounded-bl-xl rounded-tr-xl text-[14px] cursor-pointer transition-all duration-300 ease-in hover:brightness-95 ${phone.badge === "Yeni" ? "text-[#1F2937]" : "text-white"}`}
                                    style={{ backgroundColor: phone.badge === "Yeni" ? "#FDDE00" : "#FF6F3E" }}
                                >
                                    {phone.badge}
                                </div>
                            </div>
                            {/*Phone image*/}
                            <div className="flex-1 min-h-0 flex items-center justify-center p-3.75">
                                <img src={phone.phoneImg} alt={phone.phoneModel} className="w-full h-full object-contain" />
                            </div>
                            {/*Phone price*/}
                            <div className="flex flex-wrap flex-row justify-between items-center h-15 border-t border-black/20">
                                <div className="flex items-center justify-center min-w-15 font-bold pl-2 text-[#0C4BA0] text-[18px]">
                                    <span>{phone.phonePrice}
                                        <sup className="text-[12px] -top-1">{phone.priceType}</sup>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="max-w-300 w-full h-4.75 flex justify-center items-center mx-auto mt-12 mb-12">
                        <a href="" className="text-[#184392] py-2 px-8 text-[12px] rounded-full border border-[#184392] cursor-pointer transition-all duration-300 ease-in hover:bg-[#184392] hover:text-white">Tümünü Göster</a>
          </div>
            </div>
        </section>
    )
}

export default SmartPhoneSection;