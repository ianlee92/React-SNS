import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followerList = [{ nickname: '이안'}, { nickname: '일안'}, { nickname: '삼안'}];
    const followingList = [{ nickname: '이안'}, { nickname: '일안'}, { nickname: '삼안'}];
    
    return (
        <>
            <Head>
                <title>프로필 | 파랑새</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    )
    
    
};

export default Profile;