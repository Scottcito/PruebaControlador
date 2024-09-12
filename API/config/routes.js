import { Router } from 'express';
import infoController  from '../controllers/infoController.js';
const router=new Router()

// Define las rutas y asigna los controladores
router.get('/info', infoController.index); 

export default router;
