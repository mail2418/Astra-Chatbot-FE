import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <img src="/logo.png" alt="OlxMobil Logo" className="h-8 mr-4" />
        </Link>
        <div className="relative">
          <input
            type="text"
            placeholder="Cari mobil favorit Anda"
            className="bg-gray-100 rounded-full px-4 py-2 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <div className="flex items-center">
        <span className="mr-4 text-sm">Hubungi Kami</span>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Login/daftar
        </button>
      </div>
    </header>
  );
};

export default Header;