import { Router } from 'express';
import { getHello } from '../controllers/hello';
import { createUser } from '../controllers/user';

const router = Router();

router.get('/hello', getHello);

router.post('/user', createUser);

export default router;
