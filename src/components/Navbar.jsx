import { GoSearch } from "react-icons/go";
import { PiShoppingCartBold } from "react-icons/pi";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="w-full bg-[#2855AC] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        {/* Left Section: Logo & Primary Nav Links */}
        <div className="flex items-center gap-8 flex-1">
          <a href="#" className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="Turkcell Logo"
              className="h-9 w-9 object-contain"
            />
          </a>
          
          <ul className="hidden lg:flex items-center gap-6 text-[15px] font-semibold">
            <li>
              <a href="#" className="py-2">Turkcell Alışveriş Merkezi</a>
            </li>
            <li>
              <a href="#" className="py-2">İnternet</a>
            </li>
            <li>
              <a href="#" className="py-2">Paketler</a>
            </li>
            <li>
              <a href="#" className="py-2">Kampanyalar</a>
            </li>
            <li>
              <a href="#" className="py-2">Servisler</a>
            </li>
          </ul>
        </div>

        {/* Right Section: Actions & Utilities */}
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-4 text-[15px] font-semibold">
            <li>
              <a href="#" className="py-2">Hızlı İşlemler</a>
            </li>
            <li className="opacity-40 text-sm" aria-hidden="true">|</li>
            
            <li className="flex items-center">
              <button 
                type="button" 
                className="p-1.5 cursor-pointer flex items-center justify-center"
                aria-label="Arama"
              >
                <GoSearch size={18} />
              </button>
            </li>
            
            <li className="flex items-center">
              <button 
                type="button" 
                className="p-1.5 relative cursor-pointer flex items-center justify-center"
                aria-label="Sepetim"
              >
                <PiShoppingCartBold size={19} />
                <span className="absolute -top-0.5 -right-0.5 bg-[#ffc900] text-[#253342] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                  0
                </span>
              </button>
            </li>

            <li className="ml-2">
              <a 
                href="#" 
                className="inline-flex items-center justify-center bg-[#ffc900] text-[#253342] py-1.5 px-4 rounded-[15px] font-semibold text-sm hover:rounded-md hover:bg-[#ffe066] duration-300 ease-in-out shadow-xs"
              >
                Giriş Yap
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar