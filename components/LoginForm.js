import React, { useState, useCallback } from 'react';
// 함수를 캐싱하는 것이 useCallback이고 값을 캐싱하는 것은 useMemo
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;
const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    // Component에 props로 넘겨주는 함수는 useCallback을 써야 최적화됨
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);
    // styled-components쓰기 싫으면 useMemo를 사용한다. 리렌더링되도 객체가 유지되어 최적화가 된다
    // const style = useMemo(() => ({ marginTop: 10 }), []);
    // 리액트에서 리렌더링은 return () 버츄얼돔 안에서만 발생
    
    const onSubmitForm = useCallback(() => {
        // e.preventDefault(); antd는 쓰지않고 onFinish에 이미 적용되어 있음
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]); // dependency에 넣어줌

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input 
                    name="user-password" 
                    type="password" 
                    value={password} 
                    onChange={onChangePassword} 
                    required 
                />
            </div>
            {/* 인라인스타일링 style={{ marginTop: '10' }} 객체를 넣어주면 {} === {} false이므로 리액트 매번 버츄얼 돔으로 검사하다가
                이전버전이랑 객체가 다르네 하면서 실제로 바뀐게 없는데 리렌더링해버린다 -> styled-components를 쓰자 */}
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

export default LoginForm;