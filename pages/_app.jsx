import React, { useEffect } from 'react';
import App from 'next/app'
import styled, { createGlobalStyle } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducer';
import Head from '../components/head';
import Header from '../components/header';

const GlobalStyle = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Raleway', 'Oswald', Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
    }
`;

const store = createStore(reducer);

const Main = styled.main`
    text-align: center;
`;
function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Provider store={ store }>
                <Head />
                <Header />
                <Main>
                    <Component { ...pageProps } />
                </Main>
            </Provider>
        </React.Fragment>
    );
}

export default MyApp;
