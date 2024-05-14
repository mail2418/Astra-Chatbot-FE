import * as React from "react";

function MyComponent() {
  
  return (
    <div className="flex flex-col pt-8 bg-white">
      <img
        loading="lazy"
        src="/2.png"
        className="z-10 mt-7 w-full aspect-[4] max-md:max-w-full"
      />
      <div className="flex justify-center items-center px-16 py-14 w-full bg-indigo-50 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-w-[1186px] max-md:max-w-full">
          <div className="text-3xl font-bold leading-7 text-center text-black max-md:max-w-full">
            Alasan beli mobil bekas berkualitas di OLXmobbi
          </div>
          <div className="mt-7 text-base leading-7 text-center text-black">
            Kondisi mobil sudah diinspeksi oleh tim ahli
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2eeac071582d6aa1c85a072404d915163a62cfd8f04f7e7b2c79fc1042924787?"
            className="mt-12 w-full aspect-[8.33] max-w-[1002px] max-md:mt-10 max-md:max-w-full"
          />
          <div className="self-stretch mt-7 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-center text-black max-md:mt-10">
                  <div className="self-center text-3xl font-bold leading-7">
                    Mobil Bergaransi
                  </div>
                  <div className="mt-10 text-xs leading-7 max-md:mt-10">
                    Garansi mesin & transmisi hingga 1 tahun, serta jaminan 7
                    hari uang kembali
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-center text-black max-md:mt-10">
                  <div className="text-3xl font-bold leading-7">
                    Test Drive dari rumah
                  </div>
                  <div className="self-center mt-12 text-xs leading-7 max-md:mt-10">
                    Nikmati kenyamanan test drive dari rumah
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-center text-black max-md:mt-10">
                  <div className="self-center text-3xl font-bold leading-7">
                    Gratis Biaya Jasa Perawatan
                  </div>
                  <div className="mt-5 text-xs leading-7">
                    Gratis biaya jasa perawatan hingga 30.000 KM/18 bulan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent

