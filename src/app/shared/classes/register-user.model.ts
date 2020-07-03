import { RegUser } from '../interfaces/register-user.interface';

export class User implements RegUser{
    constructor(
        public id:number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public password:string
    ){}
}