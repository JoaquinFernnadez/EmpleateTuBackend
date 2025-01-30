import HttpException from "../exceptions/HttpException";
import { Offer, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class OfferService {

    static async getById(id:number){
        const findUser =  await prisma.user.findUnique({ where: {id}})
        if(!findUser)  throw new HttpException (404, 'User not found')
        return findUser
    }
    static async getAll(){
        const offers = await prisma.offer.findMany()
        return offers
    }
    static async create(body: Offer){
        const offers = await prisma.offer.create({data:{
            ...body}})
        return offers
    }
    static async delete(id: number){
        const offer = await prisma.offer.delete({where:{id}})
        if(!offer)  throw new HttpException (404, 'Offer not found')
        return "offert deleted"
    }
    static async update(){
        const users = await prisma.user.findMany()
        return users
    }
    static async rate(){
        const users = await prisma.user.findMany()
        return users
    }
    static async getRate(){
        const users = await prisma.user.findMany()
        return users
    }


}