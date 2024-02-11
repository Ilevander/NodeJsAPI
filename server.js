import express from 'express';

const app = express();
const port = 3000;

// localhost:3000/aaa
app.get('/', (req, res) => {
    res.send('Hello You!');
});

//tell express to listen to the port 3000
app.listen(port, () => {
    console.log(`Hey Ilyass , go to http://localhost:${port}`);
});
