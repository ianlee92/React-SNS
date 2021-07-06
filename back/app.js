const express = require('express');

const app = express();

/*
app.get -> 가져오다
app.post -> 생성하다
app.put -> 전체 수정
app.delete -> 제거
app.patch -> 부분 수정
app.options -> 찔러보기
app.head -> 헤더(바디에 대한 부가적정보)만 가져오기(헤더/바디)
*/

app.get('/', (req, res) => {
    res.send('hello express');
});

app.get('/api', (req, res) => {
    res.send('hello express');
});

app.get('/api/posts', (req, res) => {
    res.send('hello express');
});

app.post('/api/post', (req, res) => {
    res.send('hello express');
});

app.delete('/api/post', (req, res) => {
    res.send('hello express');
});

app.listen(3065, () => {
    console.log('서버 실행 중');
});