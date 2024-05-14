import axios from "axios"

export async function getCarDetail({ params }: { params: { id: string } }){
    const res = await axios.get(`http://localhost:8080/api/carlist/getdetailcar/${params.id}`)
      if (!res) {
        throw new Error('Failed to fetch data')
      }
    return res
}