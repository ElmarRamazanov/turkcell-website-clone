import { useState } from "react";



function MidFooter() {

  const [activeLanguage, setActiveLanguage] = useState("tr");



  return (
    <footer className="flex w-full bg-[#2658AE] text-white border-t border-white py-4 px-6">
      <div className="container max-w-300 flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-3 items-center text-center mx-auto mt-3 pb-2 text-[15px] leading-[1.4]">
        <div
          className={`cursor-pointer border-b pb-0.5 ${activeLanguage === "tr" ? "border-[#FFD200]" : "border-transparent"
            }`}
          onClick={() => setActiveLanguage("tr")}
        >
          Türkçe
        </div>
        <div
          className={`cursor-pointer border-b pb-0.5 ${activeLanguage === "en" ? "border-[#FFD200]" : "border-transparent"
            }`}
          onClick={() => setActiveLanguage("en")}
        >
          English
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="mb-2"><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
            className="relative top-1 w-[18px] h-[18px]"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346M7.125 9c-.055.127-.793 2.96-.793 2.96a.5.5 0 1 1-.966-.26s.88-2.827.88-3.43V6.801l-1.958-.525a.5.5 0 1 1 .258-.966s1.654.563 2.3.563h1.309c.645 0 2.298-.563 2.298-.563a.5.5 0 1 1 .26.966l-1.966.527V8.27c0 .603.88 3.427.88 3.427a.5.5 0 0 1-.966.259S7.92 9.127 7.869 9c-.05-.127-.219-.127-.219-.127h-.307s-.173 0-.218.127M7.5 5.12a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25"
            />
          </svg></div>
          <div className="text-[14px]">
            Erişilebilirlik</div>
        </div>
      </div>
    </footer>
  );
}

export default MidFooter;