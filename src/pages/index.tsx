import MyComponent from "@/components/Main";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Home = () => {
    useEffect(() => {
        const setupChatbot = (hasOpenChatbot:any) => {
            if (!hasOpenChatbot) {
                const dfMessengerElement:any = document.querySelector('df-messenger');
                const dfMessengerChatBubbleElement = document.querySelector('df-messenger-chat-bubble');
                if (dfMessengerElement && dfMessengerChatBubbleElement) {
                    dfMessengerChatBubbleElement.addEventListener('click', function handleFirstClick() {
                        // Send greeting message to chatbot
                        dfMessengerElement.renderCustomText('Katakan "Halo untuk memulai percakapan"');
                        // Remove event listener after the first click
                        dfMessengerChatBubbleElement.removeEventListener('click', handleFirstClick);
                        localStorage.setItem("hasOpenChatbot", "true");
                    });
                }
            }
        };
        // Wait until the df-messenger is available in the DOM
        const intervalId = setInterval(() => {
            const dfMessengerElement = document.querySelector('df-messenger');
            if (dfMessengerElement) {
                const hasOpenChatbot = localStorage.getItem('hasOpenChatbot');
                setupChatbot(hasOpenChatbot);
                clearInterval(intervalId);
            }
        }, 100); // Check every 100ms
        // Clean up the interval on unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Head>
                <title>Home Page Astra Chatbot</title>
            </Head>
            <MyComponent />
        </div>
    );
}

export default Home;