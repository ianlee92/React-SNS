const express = require('express');
// node에서는 웹팩을 안쓰므로 import -> require, export default -> module.exports

// 라우터로 분리
const router = express.Router();
router.post('/', (req, res) => { // POST /post
    res.send('hello express');
});

router.delete('/', (req, res) => { // DELETE /post
    res.send('hello express');
});

module.exports = router;