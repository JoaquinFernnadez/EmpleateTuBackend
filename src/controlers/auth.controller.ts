/* function login(){

}
function register(){

} */

import { AuthService } from "../services/auth.service";
import { Request, Response } from 'express';

export class AuthController{
    static async  register(req:Request, res:Response){
        try{
            const userData = req.body
            const newUser = await AuthService.register(userData)
            res.status(201).json({message:'User register succesfully',newUser})
        }
        catch(error){
            res.status(409).json({message:'Fallo al registrar al usuario'})
        }
    }


    static async login(req:Request, res:Response){

 try{ 
            const userData = req.body
            // Validar el body ( opcional ) implementarlo en mi proyecto
            const token = await AuthService.login(userData.email,userData.password,userData.role)
            // inyectar una cookie al cliente en lugar del token
            res.status(201).json({message:'Login succesfully',token})
        }
        catch(error){
            res.status(409).json({message:'Fallo al loguearse al usuario'})
        }

    }
}