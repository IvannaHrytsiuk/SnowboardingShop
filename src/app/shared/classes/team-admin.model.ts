import { AdmTeam } from '../interfaces/team-admin.interface';

export class Team implements AdmTeam{
    constructor(
        public id:number,
        public name: string,
        public description: string,
        public fact: string,
        public image:string
    ){}
}