const express = require('express');

const app = express();
const port = 8000;

app.get('/start', (req, res, next) => {
    const welcomeMsg = 'welcome to page';
    console.log('Entering welcome page');
    res.send(welcomeMsg);
});

app.listen(port, () => {
    console.log(`
    ====================================
    Listening on port ${port}....
    ====================================
    `);
});