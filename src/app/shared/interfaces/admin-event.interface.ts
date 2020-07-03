export interface AdmEvent{
    id:number;
    name:string;
    date: string;
    type: Array<string>;
    video:string;
    location:string;
    locationLat:number;
    locationLng:number;
    slogan:string;
    description:string;
    image:string;
    wear:string;
    pack:string;
    ticket:string;
    toDo:string;
    get:string;
    site:string;
    image1?:string;
    image2?:string;
    image3?:string;
}