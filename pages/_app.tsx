import React from 'react';

import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import { createStore } from 'redux';
import rootReducer from '../src/redux/reducer/';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import styled, {
  createGlobalStyle,
  ThemeProvider,
  css,
} from 'styled-components';
import GlobalStyle from 'StyleVars';

import Head from 'next/head';

import Layout from 'src/components/layout';
import Bases, { Header } from 'Bases';

const store = createStore(rootReducer, composeWithDevTools());

const persistor = persistStore(store);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={GlobalStyle}>
            <Head>
              <link
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                rel="stylesheet"
              />
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </CookiesProvider>
  );
};

export default MyApp;
