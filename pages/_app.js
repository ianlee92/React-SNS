// _app.js는 pages들의 공통 부분

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <title>파랑새</title>
            </Head>
            <Component />
        </>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);