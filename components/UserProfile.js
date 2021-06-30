import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Avatar, Button } from 'antd';

import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { me, isLoggingOut } = useSelector((state) => state.user);

    const onLogOut = useCallback(() => {
        dispatch(logoutRequestAction());
    }, []);

    return (
        <Card
            actions={[ // 리액트에서 배열은 key를 넣어줘야함
                <div key="twit">짹짹<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followings">팔로워<br />0</div>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            {/* isLoggingOut이 true면 loading으로 바뀜 */}
            <Button onClick={onLogOut} loading={isLoggingOut}>로그아웃</Button> 
        </Card>
    );
};

export default UserProfile;