import { AdmProduct } from '../interfaces/admin-product.interface';

export class Product implements AdmProduct{
    constructor(
        public id:number,
        public categoriesId: number,
        public productName: string,
        public type: string,
        public description:string,
        public size:string,
        public width:string,
        public laminates:string,
        public level:string,
        public price:number,
        public image:string,
    ){}
}
