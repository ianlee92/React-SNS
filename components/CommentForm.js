import { Form, Input, Button } from 'antd';
import React,  { useCallback } from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CommentForm = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id);
    const [commentText, onChangeCommentText] = useInput('');
    const onSubmitComment = useCallback(() => {

    }, [commentText]);
    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{ position: 'relative', margin: 0}}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button style={{ position: 'absolute', right: 0, bottom: -40 }} type="primary" htmlType="submit">댓글달기</Button>
            </Form.Item>
        </Form>
    );
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
};

export default CommentForm;