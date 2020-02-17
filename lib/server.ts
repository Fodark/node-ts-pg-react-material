import express = require('express');

const app: express.Application = require('./app');
const PORT: number = 5000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})