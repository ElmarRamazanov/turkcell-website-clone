function LeftPopUp() {
  return (
    <div className="hidden group fixed left-0 z-[9999] top-1/3 md:top-1/2 -translate-y-1/2 sm:block">

      {/* ANA KUTU */}
      <div className="relative h-24 w-42 bg-[#194d9b] z-50">

        <img
          className="absolute top-4 left-10 h-20 w-20"
          src="https://www.kktcell.com//Files/ayin-yildizi__1_.png"
          alt=""
        />

        <div className="absolute -top-3 left-2 h-15 w-38 rounded-lg bg-[#fdbb0d]">
          <a
            href=""
            className="flex h-full items-center justify-center text-center text-[12px] font-bold text-white no-underline"
          >
            Bix TSW2 Akıllı Saat'de efsane indirim!
          </a>
        </div>
      </div>

      {/* HOVER'DA SAĞA AÇILAN PANEL */}
      <div
        className="
        text-white
          absolute
          left-5
          top-0
          ml-0
          h-24
          w-42
          flex
          items-center
          justify-center
          text-center
          text-[12px]
          font-bold
          rounded-r-lg
          bg-[#194d9b]
          p-4
          shadow-xl
          scale-100
          animate-slide-in
          transform
          ease-in


          opacity-100
          -translate-x-4
          pointer-events-none

          transition-all
          duration-300

          z-10



          group-hover:opacity-100
          group-hover:translate-x-37
          group-hover:pointer-events-auto

        "
      >
        Efsane indirimi kaçırma 🎉 Hemen tıkla!
      </div>
    </div>
  );
}

export default LeftPopUp;