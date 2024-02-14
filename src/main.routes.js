import  Express  from "express";
import { StatusCodes } from "http-status-codes";

const router = Express.Router();

router.get('/ping',(req,res) =>{
    res.status(StatusCodes.OK);
    res.send('OK response , Server is running');
});

export default router;