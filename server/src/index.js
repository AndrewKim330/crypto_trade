import express from 'express';
import router from './router.js';

const app = express();
const port = 8000;

app.use("/info", router)
app.use("/trade", router)

app.listen(port, () => {
    console.log(`
    ====================================
    Listening on port ${port}....
    ====================================
    `);
});