import app from './src/app.js'
// import http from 'http';
// import { createServer } from 'http';
// const http = require ("http")

const port = 3000;

app.listen(port, () => {
    console.log(`servidor escutando na porta ${port}`)
});

