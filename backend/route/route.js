import express from 'express';

import { getuser,addUser,getUserById,editUser,deleteUser} from '../controller/user-control.js';
const route = express.Router();

route.get('/',getuser);
route.post('/add',addUser);
route.get('/:id',getUserById);
route.put('/:id',editUser);
route.delete('/:id',deleteUser);
export default route;