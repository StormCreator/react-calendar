import { Vacation } from '../vacation';
import { eachDayOfInterval } from 'date-fns'


export const isVacation = (date: Date, vacations: Vacation[]): boolean => {
    let isVac = false;
    vacations.forEach(vacation => {
        const vacationDays = eachDayOfInterval({ start: vacation.startDate, end: vacation.endDate });
    });
    return isVac;
    
}