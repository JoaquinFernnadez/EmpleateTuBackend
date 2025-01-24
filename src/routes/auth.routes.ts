import { Router } from "express";
import { AuthController } from "../controlers/auth.controller";
import {isAuthenticate}  from "../middlewares/auth.middleware"

const router = Router()

router.post('/login', AuthController.login )
// router.post('/logout',AuthController.logout )
router.post('/register', AuthController.register )
router.get('/profile',isAuthenticate,  AuthController.profile )


export default router