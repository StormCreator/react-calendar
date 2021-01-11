import { Day } from "./Day";
import { Team } from "./team";
import { User } from "./user";
import { Vacation } from "./vacation";

export interface TableState{
    teams:Team[];
    vacations:Vacation[];
    currentDate:Date;
    daysInMonth:Day[];
}
