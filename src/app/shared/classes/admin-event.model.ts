import { AdmEvent } from '../interfaces/admin-event.interface';

export class Events implements AdmEvent{
    constructor(
        public id:number,
        public name:string,
        public date: string,
        public type: Array<string>,
        public video:string,
        public location:string,
        public locationLat:number,
        public locationLng:number,
        public slogan:string,
        public description:string,
        public image:string,
        public wear:string,
        public pack:string,
        public ticket:string,
        public toDo:string,
        public get:string,
        public site:string,
        public image1?:string,
        public image2?:string,
        public image3?:string,
    ){}
}