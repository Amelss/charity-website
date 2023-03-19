import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <ParallaxProvider speed={10}>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Layout>
  );
}
