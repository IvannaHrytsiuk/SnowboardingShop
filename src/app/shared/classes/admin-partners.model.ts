import { AdmPartners } from '../interfaces/admin-partners.interface';

export class Partners implements AdmPartners{
    constructor(
        public id:number,
        public name:string,
        public link:string,
        public description:string,
        public image:string
    ){}
}