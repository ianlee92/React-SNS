import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Profile = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>프로필 | 파랑새</title>
            </Head>
            <AppLayout>프로필</AppLayout>
        </>
    )
    
    
};

export default Profile;