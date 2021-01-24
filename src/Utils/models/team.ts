import { User } from "./user";


export interface Team{
    id: number;
    name: string;
    color:string;
    users:User[];
}
