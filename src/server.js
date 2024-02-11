import express from 'express';
import {StatusCodes} from 'http-status-codes';
  

const app = express();
//We can change the port for any port we want
const port = 3000;
const STATUS = {
    SUCCESS: 'OK',
    FAILURE: 'NO'
};

app.use(express.json());


// localhost:3000/toto  
//GET
app.get('/toto', (req, res) => {
    //res.status(201);//Created http status code
    res.status(StatusCodes.OK);
    res.send('toto route , sending Ok response !! ');
    
});
 

// localhost:3000/titi  
//POST
app.post('/titi', (req, res) => {
    const data = [];
    const {body} = req;

    // data.push(req.body);
    if (!body.name){
        return res.status(StatusCodes.BAD_REQUEST).send({
            status: STATUS.FAILURE,
            message: 'Name is required',
        });
    }
    res.status(StatusCodes.CREATED).send({
        status : STATUS.SUCCESS,
        message : data,

    });
    // res.send('titi route , sending created response !! ');
    
});


//tell express to listen to the port 3000
app.listen(port, () => {    
    console.log(`Hey Ilyass , go to http://localhost:${port}`);
});
