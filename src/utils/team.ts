import { User } from "./user";

export interface Team{
    id: number;
    name: string;
    users:User[];
    retracted:boolean;
}
