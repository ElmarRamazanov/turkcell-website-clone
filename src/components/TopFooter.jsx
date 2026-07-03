function TopFooter() {

const footerLinks = [
    {
        title: "Hakkımızda",
        links: [
            { name: "Genel Bakış", href: "#" },
            { name: "İnsan Kaynakları", href: "#" },
            { name: "Haberler", href: "#" },
            { name: "İletişim", href: "#" },
            { name: "Sürdürülebilirlik", href: "#" },
            { name: "Sosyal Sorumluluk", href: "#" },
        ]
    },
    {
        title: "Turkcell Alışveriş Merkezi",
        links: [
            { name: "Yaz Fırsatı", href: "#" },
            { name: "Ev & Yaşam", href: "#" },
            { name: "Kulaklıklar", href: "#" },
            { name: "Oyun Konsolları", href: "#" },
            { name: "Televizyonlar", href: "#" },
            { name: "Android Telefonlar", href: "#" },
            { name: "Apple Telefonlar", href: "#" },
            { name: "5G Destekli Telefonlar", href: "#" },
        ]
    },
    {
        title: "İnternet",
        links: [
            { name: "Superbox", href: "#" },
            { name: "Mobil İnternet", href: "#" },
            { name: "Turkcell Ev İnterneti", href: "#" },
        ]
    },
    {
        title: "Paketler",
        links: [
            { name: "Faturalı 4.5G", href: "#" },
            { name: "Platinum 4.5G", href: "#" },
            { name: "GNÇ", href: "#" },
            { name: "Turkcell Çocuk", href: "#" },
            { name: "Faturalı Hatta Geçiş" , href: "#" },
            { name: "Faturasız", href: "#" },
            { name: "Yurt Dışını Arama", href: "#" },
            { name: "Yurt Dışında Kullanım", href: "#" },
        ]
    },
    {
        title: "Özel Sayfalar",
        links: [
            { name: "5G", href: "#" },
            { name: "4.5G", href: "#" },
            { name: "Akıllı Ev Çözümleri", href: "#" },
            { name: "Sarı Sandık Extra", href: "#" },
            { name: "Turkcell Platinum", href: "#" },
            { name: "Gnç", href: "#" },
            { name: "Paycell", href: "#" },
            { name: "Superbox", href: "#" },
            { name: "Mobil Aidat", href: "#" },
            { name: "Turkcell Blog", href: "#" },
        ]
    },
    {
        title: "Yardım",
        links: [
            { name: "4.5G", href: "#" },
            { name: "Kanallarımız", href: "#" },
            { name: "Hattınız", href: "#" },
            { name: "Yurt Dışı", href: "#" },
            { name: "Yardım Araçları", href: "#" },
            { name: "Turkcell'li Olmak", href: "#" },
            { name: "Cihazlar", href: "#" }
        ]
    }
]

    return (
        <footer className="w-full bg-[#2658AE] text-white border-b border-[#78A0E2]">
            <div className="mx-auto flex w-full max-w-310 flex-col justify-between gap-10 px-6 py-9 lg:flex-row lg:items-start">
                <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h4 className="mb-3 text-[14px] font-bold">{section.title}</h4>
                            <ul className="space-y-1.5">
                                {section.links.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="text-[11px] text-white transition-opacity hover:underline">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="w-full lg:max-w-72.5">
                    <h4 className="mb-3 text-[12px] font-bold">Bizi Takip Edin</h4>
                    <div className="mb-7 flex items-center justify-start gap-3">
                            <a href="#" aria-label="Facebook">
                                <img src="https://www.kktcell.com/Assets/Web/build/assets/images/social/Facebook.svg" alt="" />
                            </a>
                            <a href="#" aria-label="X">
                                <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    className="w-5 h-5 rounded-full bg-white p-0.75 box-content"
    >
      <g fill="#2855AC">
        <path d="M1 2h2.5L3.5 2h-2.5z">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M1 2h2.5L3.5 2h-2.5z;M1 2h2.5L18.5 22h-2.5z"
          />
        </path>

        <path d="M5.5 2h2.5L7.2 2h-2.5z">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M5.5 2h2.5L7.2 2h-2.5z;M5.5 2h2.5L23 22h-2.5z"
          />
        </path>

        <path d="M3 2h5v0h-5z" opacity="0">
          <set attributeName="opacity" begin="0.4s" to="1" />
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.4s"
            dur="0.4s"
            values="M3 2h5v0h-5z;M3 2h5v2h-5z"
          />
        </path>

        <path d="M16 22h5v0h-5z" opacity="0">
          <set attributeName="opacity" begin="0.4s" to="1" />
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.4s"
            dur="0.4s"
            values="M16 22h5v0h-5z;M16 22h5v-2h-5z"
          />
        </path>

        <path d="M18.5 2h3.5L22 2h-3.5z" opacity="0">
          <set attributeName="opacity" begin="0.5s" to="1" />
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.5s"
            dur="0.4s"
            values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"
          />
        </path>
      </g>
    </svg>
                            </a>
                            <a href="#" aria-label="Youtube">
                                <img src="https://www.kktcell.com/Assets/Web/build/assets/images/social/Youtube.svg" alt="" />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <img src="https://www.kktcell.com/Assets/Web/build/assets/images/social/Instagram.svg" alt="" />
                            </a>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <span className="text-[14px] font-bold">Uygulamamızı İndirin</span>
                        <span className="max-w-[320px] text-[12px] leading-[1.4]">Aşağıdaki QR kodu okutarak cihazınıza uygun Kuzey Kıbrıs Turkcell mobil uygulamasını indirebilirsiniz.</span>
                        <div className="mt-2 flex items-center justify-start gap-4">
                            <div className="flex h-28 w-28 items-center justify-center rounded-lg">
                                <img src="https://www.kktcell.com/Assets/Web/build/assets/images/kktcell_app_qr.png" alt="KKTCell mobil uygulama QR" />
                            </div>
                            <div className="h-27.5 w-px bg-white/50"></div>
                            <div className="flex flex-col items-start gap-4"> 
                                <a href="#" className="flex h-12 w-42.5 items-center justify-center overflow-hidden rounded-md">
                                    <img  src="https://www.kktcell.com/Assets/Web/build/assets/images/appstore-tr.png" alt="" />
                                </a>
                                <a href="#" className="flex h-12 w-42.5 items-center justify-center overflow-hidden rounded-md">
                                    <img src="https://www.kktcell.com/Assets/Web/build/assets/images/gplay-tr.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default TopFooter;