import prisma from "../prisma/prismaClient";

interface UserRequest{
    id: string;
    email: string;
    name: string;
    last_name: string;
}

class UserService{
    static async createUserService({id, email, name, last_name}: UserRequest){
        if(!id || !email){
            throw new Error("ID Or Email is missing");
        }

        const userAlreadyExists = await prisma.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            return;
        }

        const user = await prisma.user.create({
            data:{
                id,
                email,
                name,
                last_name
            },
            select:{
                id: true,
                email: true,
                name: true,
                last_name: true
            }
        })
        console.log("Salvo no banco")
        return user;
    }

    static async getUserService(user_id: string){

        const user = await prisma.user.findFirst({
            where:{
                id: user_id
            },
            select:{
                id: true,
                email: true,
                name: true,
                last_name: true
            }
        })
        return user
    }
}

export { UserService };