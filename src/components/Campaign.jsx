function Campaign() {

const campaigns = [
  {
    title: "Final Üniversitesi'nde Ayrıcalıklısınız!",
    img: "https://www.kktcell.com/Files/FinalUniKKTCELL.png",
    price: "Ücretsiz"
  },
  {
    title: "Oyna Kazan",
    img: "https://www.kktcell.com/Files/Oyna_Kazan600x450.png",
    price: "Ücretsiz"
  },
  {
    title: "Haraket Et Kazan",
    img: "https://www.kktcell.com/Files/Campaigns/2026/Hareket_et_kazan_Web_600x450.png",
    price: "Ücretsiz"
  }
];



  return (
    <section className="w-full px-4">
            <div className="max-w-305 w-full mx-auto">
                <div className="w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-stretch gap-8">
                    {campaigns.map((campaign) => (
                        <div key={campaign.title} className="w-full max-w-71.25 h-[364.48px] flex flex-col rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.28)] overflow-hidden bg-white cursor-pointer transition-all duration-300 ease-in hover:shadow-[0_0_36px_rgba(0,0,0,0.48)]">
                            {/*Campaign title*/}
                            <div className="flex items-center justify-start text-center p-3.75 whitespace-nowrap w-full">
                                <h3 className="text-lg text-[#253646] font-bold text-center truncate ">{campaign.title}</h3>
                            </div>
                            {/*Campaign image*/}
                            <div className="flex-1 min-h-0 flex sp-3.75">
                                <img src={campaign.img} alt={campaign.title} className="w-full h-full object-contain" />
                            </div>
                            {/*Campaign price*/}
                            <div className="flex items-center justify-center p-3.75 border-t border-black/20">
                                <span className="text-xl font-bold text-[#0C4BA0]">{campaign.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="max-w-300 w-full h-4.75 flex justify-center items-center mx-auto mt-12 mb-12">
                        <a href="" className="text-[#184392] py-2 px-8 text-[12px] rounded-full border border-[#184392] cursor-pointer transition-all duration-300 ease-in hover:bg-[#184392] hover:text-white">Tümünü Göster</a>
          </div>
            </div>
        </section>
                               
  );
}

export default Campaign;