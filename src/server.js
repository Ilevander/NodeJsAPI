import express from 'express';

import appRoutes from './user.routes.js';
import mainRoutes from './main.routes.js';


const app = express();
//We can change the port for any port we want
const port = 3000;


app.use(express.json());

app.use('/v1' , mainRoutes);
app.use('/v1/user' , appRoutes);


//tell express to listen to the port 3000
app.listen(port, () => {    
    console.log(`Hey Ilyass Server is started , go to http://localhost:${port}`);
});
