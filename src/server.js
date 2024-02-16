import express from 'express';

import appRoutes from './user.routes.js';
import mainRoutes from './main.routes.js';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit'
import compression from 'compression';


const app = express();
//We can change the port for any port we want
const port = 3000;

const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
})

app.use(limiter);
app.use(express.json());
app.use(helmet());
app.use(compression());

app.use('/v1' , mainRoutes);
app.use('/v1/user' , appRoutes);


//tell express to listen to the port 3000
app.listen(port, () => {    
    console.log(`Hey Ilyass Server is started , go to http://localhost:${port}`);
});
