const express = require('express');
const path = require('path');

const cookieParse = require('cookie-parser');

const app = express();
app.use(cookieParse());

app.get('/', (req, res) => {
    console.log('cookies:', req.cookies);
    res.cookie('test1', 'test');
    res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/app.js', (req, res) => {
    console.log('app cookies:', req.cookies);
    res.sendFile(path.join(__dirname, './app.js'));
})

app.get('/like', (req, res) => {
    res.send({
        data: 'true'
    });
})

app.listen(3000, () => {
    console.log('server is running');
})