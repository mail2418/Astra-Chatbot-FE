// components/Footer.jsx

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Merek Populer</h3>
            <ul className="space-y-2">
              <li>Honda</li>
              <li>Toyota</li>
              <li>Suzuki</li>
              <li>Nissan</li>
              <li>BMW</li>
              <li>Mazda</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Lokasi Populer</h3>
            <ul className="space-y-2">
              <li>Jakarta</li>
              <li>Bandung</li>
              <li>Medan</li>
              <li>Surabaya</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Informasi Penting</h3>
            <ul className="space-y-2">
              <li>OLX News</li>
              <li>FAQ</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tentang OLXmobil</h3>
            <ul className="space-y-2">
              <li>Pusat Bantuan</li>
              <li>Kebijakan Privasi</li>
              <li>Syarat dan Ketentuan</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  {/* SVG path for Facebook icon */}
                </svg>
              </a>
              {/* Add similar links for other social media icons */}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">150264</span>
            <span className="text-gray-400">Jam kerja: 09.00 - 18.00</span>
          </div>
          <p className="mt-4 sm:mt-0 text-gray-400">
            Merek dagang dan logo kendaraan yang ditampilkan adalah merek dagang dan logo yang bukan milik OLXmobil, melainkan milik masing-masing pemilik yang terdaftar pada otoritas yang berwenang. Penggunaan merek dagang dan logo di Platform ini hanya untuk tujuan informasi dan bukan untuk promosi.
          </p>
          <p className="mt-4 text-gray-400">Bantuan &#183; Peta lokasi</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <p className="text-gray-400 text-center">2024 &copy; Hak Cipta</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;