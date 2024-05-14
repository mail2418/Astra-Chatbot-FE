import { getCarDetail } from "@/app/api/item/[id]/route";
export default async function carDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const car = await getCarDetail({ params: { id } });
  const data = car.data?.data; // Menggunakan operator opsional chaining untuk menangani kemungkinan data kosong
  console.log(data)

  return (
    <>
      {data ? (
        <div className="flex flex-col md:flex-row mx-20 my-11">
          <div className="w-full md:w-2/3 mb-8 md:mb-0 md:mr-8">
            <img
              src={`${data.carPhoto}`}
              alt={`${data.car.carType} ${data.car.carMerk}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
              <p className="text-2xl font-bold mb-2">{`${data.car.carType} ${data.car.carMerk} ${data.carYear}`}</p>
              <p className="text-gray-600">
                {`Harga Mobil Rp. ${data.carPrice.toLocaleString('id-ID')}`}
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Deskripsi:</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti necessitatibus nesciunt veniam labore, laboriosam reprehenderit quam corporis culpa fugiat dolor nulla. Eaque voluptas minus aspernatur rerum repellat voluptatum asperiores.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex mx-20 my-11 bg-red-100 p-6 rounded-lg shadow-md">
          <p className="text-red-600">Terdapat error pada pengambilan data</p>
        </div>
      )}
    </>
  );
}