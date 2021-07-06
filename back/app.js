const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const app = express();

db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);

/*
app.get -> 가져오다
app.post -> 생성하다
app.put -> 전체 수정
app.delete -> 제거
app.patch -> 부분 수정
app.options -> 찔러보기
app.head -> 헤더(바디에 대한 부가적정보)만 가져오기(헤더/바디)
*/

// json, urlencoded가 front에서 받아온 데이터를 req.body안에 넣어줌
// 미들웨어(use안에 들어가는것)는 순서대로 실행되므로 위에 적어야함
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('hello express');
});

app.get('/api', (req, res) => {
    res.send('hello express');
});

app.get('/api/posts', (req, res) => {
    res.send('hello express');
});

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log('서버 실행 중!');
});