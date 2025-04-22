import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/Layout';  // exact match to Layout.tsx

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
