import express, { response } from 'express';

import {StatusCodes} from 'http-status-codes';
import userService from './services/user.service.js';

const router = express.Router();


const STATUS = {
    success: 'OK',
    failure: 'NO'
};

router.get('/all',(req,res) => {
    const users = userService.getAllUsers();

    if(users.length)
        {
           return res.status(StatusCodes.OK).send(users);
        }
        return res.status(StatusCodes.NOT_FOUND).send(
            {
                status: STATUS.failure,
                message: 'Users Nor Found !!',
            }
        )
});

//localhost/v1/user/get/id
router.get('/get/:id',(req,res) => {
    const id = parseInt(req.params.id,10);
    const user = userService.getUser(id);

    if(user)
        {
           return res.status(StatusCodes.OK).send(
              {
                status: STATUS.success,
                data: user,
              }
           );
        }
        return res.status(StatusCodes.NOT_FOUND).send(
            {
                status: STATUS.failure,
                message: `User ${id} is not found !!`,
            }
        );
});

// localhost:3000/v1/user/add  
//POST
router.post('/add', (req, res) => {
    const {body:user} = req;

    const addedUser = userService.addUser(user);
    
    return res.status(StatusCodes.CREATED).send({
            status: STATUS.success,
            message: addedUser,
        });
});

router.put('/update/:id', (req, res) => {
    const {body:user} = req;

    const id = parseInt(req.params.id,10);

    const updatedUser = userService.updateUser(id, user);
        
      if(updatedUser) 
           {
            return res.status(StatusCodes.OK).send({
                status: STATUS.success,
                message: updatedUser,
            });
           }
             else{
                return res.status(StatusCodes.NOT_FOUND).send({
                    status: STATUS.failure,
                    message: `User "${id}" is not found `,
                });
             }
        
});


router.delete('/delete/:id' , (req,res) => {
     const { params } = req;

     const id = parseInt(params.id);
     const user = userService.getUser(id);

     if(user) 
            {
                userService.removeUser(id);
                return res.status(StatusCodes.OK).send({
                      status: STATUS.success,
                      message: `User ${id} has been deleted`,
                });
            }
            else
               {
                return res.status(StatusCodes.NOT_FOUND).send({
                      status: STATUS.failure,
                      message: `User ${id} hasn't been deleted`,
                })
               }
    
})



 

export default router;