import Head from "next/head";
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
                <h1>Home Page Astra Chatbot</h1>
            </div>
        </div>

    )
}

export default Home