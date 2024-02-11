import express from 'express';

const app = express();
//We can change the port for any port we want
const port = 3000;

// localhost:3000/toto
app.post('/toto', (req, res) => {
    res.status(201);//Created http status code
    res.send('Hello toto!');
});

//tell express to listen to the port 3000
app.listen(port, () => {
    console.log(`Hey Ilyass , go to http://localhost:${port}`);
});
