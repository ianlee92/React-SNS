import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Avatar, Button } from 'antd';

import { logoutAction } from '../reducers';

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    }, []);
    return (
        <Card
            action={[ // 리액트에서 배열은 key를 넣어줘야함
                <div key="twit">짹짹<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followings">팔로워<br />0</div>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>ian</Avatar>}
                title="ianlee"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;