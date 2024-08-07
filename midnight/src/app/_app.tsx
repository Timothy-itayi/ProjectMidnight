// pages/_app.tsx
import React from 'react';
import "./globals.css"; 

type AppProps = {
  Component: React.ComponentType;
  pageProps: any;
};

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
