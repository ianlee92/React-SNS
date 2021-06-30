// Layout은 일부 공동 부분
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const Global = createGlobalStyle` // gutter문제 해결 밑에 가로 스크롤바 사라짐
    .ant-row {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .ant-col:first-child {
        padding-left: 0 !important;
    }

    .ant-col:last-child {
        padding-right: 0 !important;
    }
`;

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;
const AppLayout = ({ children }) => {
    const { me } = useSelector((state) => state.user);
    return (
        <div>
            <Global />
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/"><a>홈</a></Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item key="search">
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item key="signup">
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
             <Row gutter={8}> {/* gutter는 컬럼 사이에 간격을 둠 */}
                {/* n/24 24등분 24가 넘어가면 내려감 xs: 모바일 / sm: 태블릿 / md: 작은 데스크탑 */}
                <Col xs={24} md={6}>
                    {me ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/ianlee92" target="_blank" rel="noreferrer noopener">Made by ianlee</a>
                </Col>
            </Row>
        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;