const express = require('express');
const cors = require('cors');

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

// 브라우저에서 백엔드 서버로 요청시 cors 문제발생하지만 프론트서버에서 백엔드서버로 갈때는 문제가 안생긴다
// 그러므로 브라우저(3060) - 프론트 서버(Next)(3060) - 백엔드 서버(express)(3065) 순으로 요청하는 proxy를 통해 cors해결
app.use(cors({
    origin: '*',
    credentials: false,
}));
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