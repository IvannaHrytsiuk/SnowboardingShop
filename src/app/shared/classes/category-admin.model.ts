import { AdmCategory } from '../interfaces/category-admin.interface';

export class Category implements AdmCategory{
    constructor(
        public id:number,
        public categoriesName:string,
    ){}
}