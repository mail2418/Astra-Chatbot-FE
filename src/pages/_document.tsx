import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  
  render() {
    const agent_id:any = process.env.NEXT_PUBLIC_ID_AGENT_DIALOGFLOW_CX;
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"
          />
        </Head>
        <body>
          <Header />
          <df-messenger
            location="asia-southeast1"
            project-id="adi-internship"
            agent-id={`${agent_id}`}
            language-code="id"
            max-query-length="-1"
          >
            <df-messenger-chat-bubble chat-title="OLXMobbi Chatbot Assistant"></df-messenger-chat-bubble>
          </df-messenger>
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
