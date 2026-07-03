function BottomFooter() {
  return (
    <footer className="bg-[#244D9F] text-white py-4 px-6 text-center text-[12px] leading-[1.4] flex justify-center items-center gap-4">
      <div className="container max-w-300 flex flex-col sm:flex-row justify-between gap-4 items-center mx-auto mt-1">
        <div>
          <a href="" className="hover:underline">Gizlilik ve Güvenlik</a>
        </div>
        <p>&copy; 2026 Kuzey Kıbrıs Turkcell</p>
      </div>
    </footer>
  );
}

export default BottomFooter;