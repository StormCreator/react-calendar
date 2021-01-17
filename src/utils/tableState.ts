import { Day } from "./day";
import { Team } from "./team";
import { User } from "./user";
import { Vacation } from "./vacation";

export interface TableState{
    currentDate:Date;
    daysInMonth:Day[];
    modalOpened:boolean;
    modalState:string;
}
