import { AuthService } from "../services/auth.service";
import { Request, Response } from 'express';
import {UserService}  from "../services/user.service";

export class AuthController{
    static async profile(req:Request, res:Response){
        const {email} = req.body.user.email
        const user = UserService.getByEmail(email)
        res.status(200).json({message:'Has conseguido entrar en una ruta protegida'})
    }
    

}