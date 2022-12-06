import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/auth";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
