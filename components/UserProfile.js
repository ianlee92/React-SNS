import React from 'react';
import { Card, Avatar } from 'antd';

const UserProfile = () => {
    return (
        <Card
            action={[ // 리액트에서 배열은 key를 넣어줘야함
                <div key="twit">짹짹<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="twit">짹짹<br />0</div>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>ian</Avatar>}
                title=""
            />
        </Card>
    );
};

export default UserProfile;