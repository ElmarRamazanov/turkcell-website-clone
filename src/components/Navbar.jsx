import { useState, useRef } from "react";
import { GoSearch } from "react-icons/go";
import { PiShoppingCartBold } from "react-icons/pi";
import { IoCloseCircleOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import superboxBanner from "../assets/superbox_banner.png";
import youtubeBanner from "../assets/youtube_premium_banner.png";
import platinumBanner from "../assets/platinum_banner.png";
import gncBanner from "../assets/gnc_banner.png";
import isturkcellBanner from "../assets/isturkcell_banner.png";
import kibrisBanner from "../assets/kibris_banner.png";

// ==========================================
// DATA: Mega dropdown menu verileri
// ==========================================
const dropdownData = {
  "Turkcell Alışveriş Merkezi": {
    type: "columns",
    columns: [
      {
        title: "Cep Telefonu",
        links: ["Akıllı Telefonlar"],
        allLink: { text: "Tüm Cep Telefonu", href: "#" },
      },
      {
        title: "Yaz Fırsatı",
        links: [],
      },
      {
        title: "Aksesuarlar",
        links: ["Telefon Aksesuarları", "Kulaklıklar", "Giyilebilir Teknolojiler"],
        allLink: { text: "Tüm Aksesuarlar", href: "#" },
      },
      {
        title: "Bilgisayar & Tablet",
        links: [
          "Laptoplar",
          "Tabletler",
          "Bilgisayar ve Tablet Aksesuarları",
          "Modem ve Network Ürünleri",
        ],
        allLink: { text: "Tüm Bilgisayar & Tablet", href: "#" },
      },
      {
        title: "Akıllı Ev Çözümleri",
        links: ["Akıllı Güvenlik", "Evde Kesintisiz Yaşam", "Akıllı Enerji Yönetimi"],
        allLink: { text: "Tüm Akıllı Ev Çözümleri", href: "#" },
      },
      {
        title: "Kişisel Bakım",
        links: ["Saç Şekillendiriciler", "Masaj Aletleri"],
        allLink: { text: "Tüm Kişisel Bakım", href: "#" },
      },
      {
        title: "Ev & Yaşam",
        links: [
          "Küçük Ev Aletleri",
          "Evcil Hayvan Ürünleri",
          "Elektrikli Süpürgeler",
          "Ev Gereçleri",
          "Fitness Ürünleri",
          "Dış Mekan Ürünleri",
        ],
        allLink: { text: "Tüm Ev & Yaşam", href: "#" },
      },
    ],
  },
  İnternet: {
    type: "simple",
    links: ["Superbox", "Mobil İnternet", "Turkcell Ev İnterneti"],
    allLink: { text: "Tüm İnternet", href: "#" },
    banners: [{ src: superboxBanner, alt: "Superbox ile 4.5G hızı" }],
  },
  Paketler: {
    type: "simple",
    links: [
      "Faturalı 4.5G",
      "Platinum 4.5G",
      "GNÇ",
      "Turkcell Çocuk",
      "Faturalı Hatta Geçiş",
      "Faturasız",
      "Yurt Dışını Arama",
      "Yurt Dışında Kullanım",
    ],
    allLink: { text: "Tüm Paketler", href: "#" },
    banners: [
      { src: platinumBanner, alt: "Turkcell Platinum ayrıcalıkları" },
      { src: gncBanner, alt: "GNÇ özel fırsatlar" },
    ],
  },
  Kampanyalar: {
    type: "simple",
    links: [
      "Uygulamalara Özel Kampanyalar",
      "Marka Kampanyaları",
      "Ev İnterneti Kampanyaları",
      "Avantajlı Kampanyalar",
      "Diğer Kampanyalar",
    ],
    allLink: { text: "Tüm Kampanyalar", href: "#" },
    banners: [{ src: youtubeBanner, alt: "YouTube Premium hediye" }],
  },
  Servisler: {
    type: "simple",
    links: [
      "eSİM",
      "BiP",
      "lifebox",
      "TV+",
      "4.5G",
      "VoLTE",
      "Paycell Kıbrıs",
      "İşTurkcell Online",
    ],
    allLink: { text: "Tüm Servisler", href: "#" },
    banners: [
      { src: isturkcellBanner, alt: "Kurumsal hatlarınızı yönetin" },
      { src: kibrisBanner, alt: "Kuzey Kıbrıs Turkcell uygulaması" },
      { src: youtubeBanner, alt: "TV+ ile izlenecek ne varsa" },
    ],
  },
};

const navItems = [
  "Turkcell Alışveriş Merkezi",
  "İnternet",
  "Paketler",
  "Kampanyalar",
  "Servisler",
];

// Hızlı İşlemler listesi
const quickActions = [
  "Fatura Öde",
  "Kontör Yükle",
  "Faturasız Paket Yükle",
  "Faturasız Mobil İnternet Yükle",
  "Turkcell Ev İnterneti Başvurusu Yap",
  "Superbox Başvurusu Yap",
  "Faturalı Hatta Geç",
  "Numaranızı Turkcell'e Taşıyın",
  "PUK Sorgula",
  "Yeni Faturasız Hat Al",
];

// ==========================================
// COMPONENT: Navbar
// ==========================================
function Navbar() {
  // Mega dropdown menü için state (hover ile açılır)
  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);

  // Hızlı İşlemler dropdown (hover ile aç/kapat)
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);

  // Arama paneli (tıkla aç/kapat)
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Giriş Yap modalı (tıkla aç/kapat)
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // --- Mega dropdown hover fonksiyonları ---
  const handleMouseEnter = (item) => {
    closeAllPanels(); // Hover ile menü açılırken diğer açık panelleri kapat
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  // Tıklama ile açılan panelleri kapatma fonksiyonu
  const closeAllPanels = () => {
    setIsSearchOpen(false);
    setIsLoginOpen(false);
    setActiveMenu(null);
  };

  return (
    <div className="relative">
      <nav className="w-full h-[61.75px] bg-[#2855AC] text-white shadow-md px-2.5 relative z-50">
        <div className="max-w-305 w-full mx-auto h-full flex items-center justify-between gap-4">

          {/* Left Section: Logo & Primary Nav Links */}
          <div className="flex items-center gap-8 flex-1">
            <a href="#" className="shrink-0 flex items-center">
              <img
                src={logo}
                alt="Turkcell Logo"
                className="h-9 w-9 object-contain"
              />
            </a>

            <ul className="hidden lg:flex items-center gap-0 text-[15px] font-semibold text-white h-full">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="#"
                    className={`py-2 px-3 transition-colors duration-200 ease-out flex items-center h-[61.75px] ${activeMenu === item
                      ? "text-[#0C4BA0] bg-white rounded-t-lg"
                      : "text-white hover:text-gray-200"
                      }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Actions & Utilities */}
          <div className="flex items-center">
            <ul className="flex items-center gap-3 text-[15px] font-semibold">

              {/* ---- Hızlı İşlemler butonu ---- */}
              <li 
                className="relative h-full flex items-center"
                onMouseEnter={() => setIsQuickActionsOpen(true)}
                onMouseLeave={() => setIsQuickActionsOpen(false)}
              >
                <a href="#" className="py-2 px-2 hover:text-gray-200 transition-colors">
                  Hızlı İşlemler
                </a>

                {/* Hızlı İşlemler dropdown listesi */}
                {isQuickActionsOpen && (
                  <div className="absolute right-0 top-12 w-70 bg-white rounded-lg shadow-xl z-60 overflow-hidden animate-dropdown group">
                    <ul>
                      {quickActions.map((action, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className="block px-5 py-3 text-[#253342] text-[14px] font-normal border-b border-gray-100 transition-colors duration-150 group-hover:bg-white"
                          >
                            {action}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>

              <li className="opacity-40 text-sm" aria-hidden="true">|</li>

              {/* ---- Arama butonu ---- */}
              <li className="flex items-center">
                <button
                  type="button"
                  className={`p-1.5 cursor-pointer flex items-center justify-center transition-colors rounded-md ${isSearchOpen ? "bg-white text-[#2855AC]" : "hover:bg-white/10"}`}
                  aria-label="Arama"
                  onClick={() => {
                    const willOpen = !isSearchOpen;
                    closeAllPanels();
                    if (willOpen) setIsSearchOpen(true);
                  }}
                >
                  <GoSearch size={18} />
                </button>
              </li>

              {/* ---- Sepet butonu ---- */}
              <li className="flex items-center">
                <button
                  type="button"
                  className="p-1.5 relative cursor-pointer flex items-center justify-center hover:bg-white/10 rounded-md transition-colors"
                  aria-label="Sepetim"
                >
                  <PiShoppingCartBold size={19} />
                  <span className="absolute -top-0.5 -right-0.5 bg-[#ffc900] text-[#253342] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                    0
                  </span>
                </button>
              </li>

              {/* ---- Giriş Yap butonu ---- */}
              <li className="ml-2">
                <button
                  type="button"
                  className={`inline-flex items-center justify-center bg-[#ffc900] text-[#253342] py-1.5 px-4 rounded-[15px] font-semibold text-sm hover:rounded-md duration-300 ease-in-out shadow-xs cursor-pointer ${isLoginOpen ? "rounded-md" : "hover:bg-[#ffe066]"}`}
                  onClick={() => {
                    const willOpen = !isLoginOpen;
                    closeAllPanels();
                    if (willOpen) setIsLoginOpen(true);
                  }}
                >
                  Giriş Yap
                </button>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      {/* ==========================================
          MEGA DROPDOWN PANEL (hover ile açılır)
          ========================================== */}
      {activeMenu && dropdownData[activeMenu] && (
        <div
          className="absolute left-0 w-full bg-white z-40 shadow-xl animate-dropdown border-t border-gray-100"
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="max-w-305 w-full mx-auto px-4 py-6">
            {dropdownData[activeMenu].type === "columns" ? (
              /* Çok sütunlu layout - Alışveriş Merkezi */
              <div className="flex gap-8">
                {dropdownData[activeMenu].columns.map((col, idx) => (
                  <div key={idx} className="flex flex-col min-w-0">
                    <h3 className="text-[#4d4d4d] font-bold text-[14px] mb-3 whitespace-nowrap">
                      {col.title}
                    </h3>
                    <ul className="flex flex-col gap-1.5">
                      {col.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <a
                            href="#"
                            className="text-[#253342] text-[13px] hover:text-[#2855AC] hover:underline transition-colors duration-200 whitespace-nowrap"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                    {col.allLink && (
                      <a
                        href={col.allLink.href}
                        className="text-[#2855AC] text-[13px] font-semibold mt-3 hover:underline whitespace-nowrap"
                      >
                        {col.allLink.text} &gt;
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              /* Basit layout - Sol liste + Sağ görseller */
              <div className="flex justify-between">
                <div className="flex flex-col min-w-55">
                  <ul className="flex flex-col gap-2">
                    {dropdownData[activeMenu].links.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="text-[#253342] text-[13px] hover:text-[#2855AC] hover:underline transition-colors duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                  {dropdownData[activeMenu].allLink && (
                    <a
                      href={dropdownData[activeMenu].allLink.href}
                      className="text-[#253342] text-[13px] font-bold mt-4 hover:underline inline-flex items-center gap-1"
                    >
                      {dropdownData[activeMenu].allLink.text} &gt;
                    </a>
                  )}
                </div>
                <div className="flex gap-3 items-start">
                  {dropdownData[activeMenu].banners.map((banner, idx) => (
                    <a key={idx} href="#" className="block rounded-lg overflow-hidden hover:opacity-90 transition-opacity duration-200">
                      <img
                        src={banner.src}
                        alt={banner.alt}
                        className="h-55 w-auto object-cover rounded-lg"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==========================================
          ARAMA PANELİ (Mega Dropdown Boyutunda)
          ========================================== */}
      {isSearchOpen && (
        <div className="absolute left-0 w-full bg-white z-40 shadow-xl animate-dropdown border-t border-gray-100">
          <div className="max-w-305 w-full mx-auto px-4 py-10 flex flex-col items-center">
            {/* Başlık */}
            <h2 className="text-[#253342] text-[28px] font-bold text-center mb-6">
              Hoş Geldiniz
            </h2>

            {/* Arama kutusu */}
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 w-175">
              <GoSearch size={18} className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Aramak istediğinizi yazın..."
                className="flex-1 outline-none text-[15px] text-[#253342]"
                autoFocus
              />
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
                onClick={() => setIsSearchOpen(false)}
              >
                <IoCloseCircleOutline size={22} />
              </button>
            </div>

            {/* Hızlı butonlar */}
            <div className="flex justify-center gap-4 mt-6">
              {["Paket Yükle", "Fatura Öde", "Kontör Yükle"].map((text) => (
                <a
                  key={text}
                  href="#"
                  className="px-5 py-2 bg-gray-200 text-[#253342] text-[13px] font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          GİRİŞ YAP PANELİ (Mega Dropdown Boyutunda)
          ========================================== */}
      {isLoginOpen && (
        <div className="absolute left-0 w-full bg-white z-40 shadow-xl animate-dropdown border-t border-gray-100">
          <div className="max-w-305 w-full mx-auto px-4 py-8 flex justify-center">
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-212 flex overflow-hidden">
              {/* Sol taraf: illüstrasyon ve açıklama */}
              <div className="w-100 bg-[#f7f8fc] p-8 flex flex-col justify-center items-center">
                <div className="text-[70px] mb-4">💻📱</div>
                <p className="text-[#253342] text-[14px] text-center leading-relaxed">
                  Giriş yaparak kalan kullanımlarınızı ve güncel kullanımlarınızı inceleyebilirsiniz.
                </p>
                <p className="text-gray-400 text-[12px] text-center mt-3">
                  Üstelik hattınız ile ilgili tüm işlemlerinizi yönetip ek paket satın alabilirsiniz.
                </p>
              </div>

              {/* Sağ taraf: giriş butonları */}
              <div className="flex-1 p-8 flex flex-col justify-center relative">
                
                <h3 className="text-[#253342] text-[24px] font-bold mb-2">
                  Giriş Yap
                </h3>
                <p className="text-gray-500 text-[13px] mb-6">
                  Aşağıdaki yöntemlerden birini seçerek giriş yapın.
                </p>

                {/* Bireysel / Kurumsal Kullanıcı Girişi */}
                <a
                  href="#"
                  className="block w-full text-center py-3 px-4 bg-[#ffc900] text-[#253342] font-bold text-[14px] rounded-lg hover:bg-[#ffe066] transition-colors duration-200 mb-3"
                >
                  Bireysel / Kurumsal Kullanıcı Girişi
                </a>

                {/* Kurumsal Yetkili Girişi */}
                <a
                  href="#"
                  className="block w-full text-center py-3 px-4 bg-white text-[#253342] font-semibold text-[14px] rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                >
                  Kurumsal Yetkili Girişi
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay arkası (karartma) */}
      {(activeMenu || isSearchOpen || isLoginOpen) && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onMouseEnter={() => setActiveMenu(null)}
          onClick={closeAllPanels}
        />
      )}
    </div>
  );
}

export default Navbar;

