import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/common/Layout";
import { Saira } from "next/font/google";
import ScrollToTop from "@/components/common/ScrollToTop";

const saira = Saira({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-saira",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${saira.style.fontFamily};
        }
      `}</style>
      <GoogleReCaptchaProvider
        reCaptchaKey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <Layout>
          <ScrollToTop />
          <Component {...pageProps} />
        </Layout>
      </GoogleReCaptchaProvider>
    </>
  );
};

export default App;
