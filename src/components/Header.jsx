import { useState } from 'react'

function Header() {
  const [accountType, setAccountType] = useState('bireysel')
  const [language, setLanguage] = useState('turkce')

  return (
    <header className="w-full h-[33.03px] bg-[#0C4BA0] text-white text-xs font-medium">
      <div className="max-w-305 w-full mx-auto h-full flex justify-between items-center px-4">
        {/* Left side: Account Type Selection */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAccountType('bireysel')}
            className={`cursor-pointer transition-all duration-200 focus:outline-hidden hover:text-[#ffe000] ${accountType === 'bireysel' ? 'opacity-100 font-bold' : 'opacity-60 hover:opacity-100'
              }`}
          >
            Bireysel
          </button>
          <span className="opacity-40 text-[10px]">|</span>
          <button
            onClick={() => setAccountType('kurumsal')}
            className={`cursor-pointer transition-all duration-200 focus:outline-hidden hover:text-[#ffe000] ${accountType === 'kurumsal' ? 'opacity-100 font-bold' : 'opacity-60 hover:opacity-100'
              }`}
          >
            Kurumsal
          </button>
        </div>

        {/* Right side: Language Selection */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage('turkce')}
            className={`cursor-pointer transition-all duration-200 focus:outline-hidden hover:text-[#ffe000] ${language === 'turkce' ? 'opacity-100 font-bold' : 'opacity-60 hover:opacity-100'
              }`}
          >
            Türkçe
          </button>
          <span className="opacity-40 text-[10px]">|</span>
          <button
            onClick={() => setLanguage('english')}
            className={`cursor-pointer transition-all duration-200 focus:outline-hidden hover:text-[#ffe000] ${language === 'english' ? 'opacity-100 font-bold' : 'opacity-60 hover:opacity-100'
              }`}
          >
            English
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header