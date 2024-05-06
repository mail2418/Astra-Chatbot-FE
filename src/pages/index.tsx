import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
const Home = () => {
    const agent_id = process.env.NEXT_PUBLIC_ID_AGENT_DIALOGFLOW_CX
    useEffect(() => {
        const dfMessengerElement = document.createElement('df-messenger')
        const dfMessengerChatBubbleElement = document.createElement('df-messenger-chat-bubble')
        dfMessengerElement.setAttribute('location', 'asia-southeast1')
        dfMessengerElement.setAttribute('project-id', 'adi-internship')
        dfMessengerElement.setAttribute('agent-id', `${agent_id}`)
        dfMessengerElement.setAttribute('language-code', 'id')
        dfMessengerElement.setAttribute('max-query-length', '-1')
        dfMessengerChatBubbleElement.setAttribute('chat-title', 'OLXMobbi Chatbot Assistant')
        dfMessengerElement.appendChild(dfMessengerChatBubbleElement)
        document.body.appendChild(dfMessengerElement)
    }, [])    
    return(
        <div className="flex flex-col min-h-screen bg-white">
            <Head>
                <title>Home Page Astra Chatbot</title>
            </Head>
            <div>
                <div className="bg-blue-500 py-8 px-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="text-white font-bold text-3xl mr-8">PESTA</div>
                        <Image src="/images/mobil-logo.png" alt="Mobil Logo" width={100} height={100} />
                    </div>
                    {/* SLIDER */}
                    <div className="flex items-center">
                        <div className="bg-white rounded-lg p-4 mr-4">
                        <div className="text-gray-500">Merek</div>
                        <div className="text-gray-500">Misalnya, Chevrolet</div>
                        <div className="flex">
                            <div className="mr-2">
                            <div className="text-gray-500">Model</div>
                            <div className="text-gray-500">Tahun</div>
                            <div className="text-gray-500">Transmisi</div>
                            <div className="text-gray-500">Varian</div>
                            </div>
                            <div>
                            <div className="text-gray-500">Provinsi</div>
                            <div className="text-gray-500">&#8250;</div>
                            </div>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"> Klik di sini untuk jual mobil </button>
                        </div>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md"> Dapatkan harga </button>
                    </div>
                    <div className="flex items-center">
                        <div className="text-white font-bold text-xl mr-4">JUAL MOBIL GRATIS MOBIL</div>
                        <div className="bg-orange-500 text-white px-4 py-2 rounded-md">Smart TV</div>
                        <div className="text-white ml-4"> dan Menangkan Hadiah Lainnya Senilai Ratusan Juta Rupiah. </div>
                        <div className="text-white ml-4">Periode: 25 Maret - 31 Mei 2024</div>
                        <Image src="/images/olt-logo.png" alt="OLT Logo" width={50} height={50} className="ml-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home