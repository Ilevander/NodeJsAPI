import express from 'express';

import  {expressYupMiddleware}  from 'express-yup-middleware';

import {getUser, addUser, updateUser, removeUser} from './user.schemas.js';
import userController from './controllers/user.controller.js';


const router = express.Router();

/**
 * This routes is more optimized in code using expressYupMiddleware and the controller for each http request/response
 */

router.get('/all', userController.getAllUsers);

router.get('/get/:id', expressYupMiddleware({ schemaValidator: getUser}), userController.getUser);

router.post('/add', expressYupMiddleware({ schemaValidator: addUser}), userController.addUser);

router.put('/update/:id', expressYupMiddleware({ schemaValidator: updateUser}), userController.updateUser);

router.delete('/delete/:id' ,  expressYupMiddleware({ schemaValidator: removeUser }), userController.removeUser);


export default router;