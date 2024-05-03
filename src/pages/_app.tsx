import '@/styles/global.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
    return (
    <React.StrictMode>
        <Component {...pageProps} />
        <Script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"/>
    </React.StrictMode>
    )
  }
  