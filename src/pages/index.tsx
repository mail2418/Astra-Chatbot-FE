import MyComponent from "@/components/Main";
import Head from "next/head";
import React, { useEffect } from "react";

const Home = () => {
    const agent_id = process.env.NEXT_PUBLIC_ID_AGENT_DIALOGFLOW_CX
    useEffect(() => {
        const dfMessengerElement = document.createElement('df-messenger');
        const dfMessengerChatBubbleElement = document.createElement('df-messenger-chat-bubble');

        // Set atribut untuk elemen df-messenger
        dfMessengerElement.setAttribute('location', 'asia-southeast1');
        dfMessengerElement.setAttribute('project-id', 'adi-internship');
        dfMessengerElement.setAttribute('agent-id', `${agent_id}`);
        dfMessengerElement.setAttribute('language-code', 'id');
        dfMessengerElement.setAttribute('max-query-length', '-1');

        // Set atribut untuk elemen df-messenger-chat-bubble
        dfMessengerChatBubbleElement.setAttribute('chat-title', 'OLXMobbi Chatbot Assistant');

        // Tambahkan df-messenger-chat-bubble ke df-messenger
        dfMessengerElement.appendChild(dfMessengerChatBubbleElement);

        // Tambahkan df-messenger ke dalam body
        document.body.appendChild(dfMessengerElement);

        // Tunggu sampai elemen df-messenger-chat-bubble sudah ada di dalam DOM
        dfMessengerChatBubbleElement.addEventListener('click', function handleFirstClick() {
            // Kirim event atau pesan greeting ke chatbot
            dfMessengerElement.renderCustomText('Katakan "Halo untuk memulai percakapan" ');
            // Hapus event listener setelah klik pertama
            dfMessengerChatBubbleElement.removeEventListener('click', handleFirstClick);
        });
    }, [])    
    return(
        <div className="flex flex-col min-h-screen bg-white">
            <Head>
                <title>Home Page Astra Chatbot</title>
            </Head>
            <MyComponent />
        </div>
    )
}

export default Home