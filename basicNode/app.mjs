import express from 'express'

import connectToDatabase from './helpers.mjs'

const app = express()

app.get('/', (req, res) => {
    res.send('<h2>Basic Node for Docker Test</h2>');
});

await connectToDatabase();

app.listen(3000);