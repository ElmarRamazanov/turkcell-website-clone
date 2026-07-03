function SuperBox() {
  return (
    <section className="flex justify-center items-center w-full min-h-48 pt-7.5 pb-3.75 mb-12 px-4">
      <div className="max-w-300 w-full min-h-39 bg-[url('https://www.kktcell.com/Files/Banners/Ana_Sayfa_Basvuru_Banner/superbox_ontalep__1_.png')] bg-cover bg-center rounded-2xl bg-no-repeat py-6 relative">
        <div className="absolute inset-0 bg-black/50 md:hidden rounded-2xl pointer-events-none"></div>
        <div className="flex flex-col md:flex-row justify-between items-center h-full w-full text-white text-center md:text-left px-6 md:px-12 gap-6 md:gap-4 relative z-10">
          <div className="flex flex-col justify-center items-center md:items-start">
            <span className="text-xl md:text-2xl font-bold leading-tight md:leading-normal">4.5G Kalitesiyle Superbox Fırsatını Kaçırma</span>
            <span className="text-[13px] md:text-sm mt-1">Evde, ofiste veya tatilde ayda 959 TL'den başlayan fiyatlarla</span>
          </div>
          <a href="" className="border-2 border-solid outline-white py-2.5 px-8 rounded-full font-bold hover:bg-white hover:text-[#184392] transition-colors md:mr-10 whitespace-nowrap">Başvur</a>
        </div>
      </div>
    </section>
  );
}

export default SuperBox;