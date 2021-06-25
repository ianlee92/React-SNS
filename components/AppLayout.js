// Layout은 일부 공동 부분

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';

const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>홈</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
             <Row gutter={8}> {/* gutter는 컬럼 사이에 간격을 둠 */}
                {/* n/24 24등분 24가 넘어가면 내려감 xs: 모바일 / sm: 태블릿 / md: 작은 데스크탑 */}
                <Col xs={24} md={6}>
                    왼쪽 메뉴
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

AppLayout.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;