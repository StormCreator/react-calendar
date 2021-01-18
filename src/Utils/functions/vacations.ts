import { Vacation } from '../vacation';
import { isWithinInterval, eachDayOfInterval, isWeekend, isSameDay } from 'date-fns';
import { Day } from '../day';
import styled from 'styled-components';


export const getVacationQuantity = (userId: number, vacations: Vacation[], currentDate: Date): number => {
    let quantity: number = 0;
    vacations.forEach(vacation => {
        if(vacation.userId === userId){
            let { startDate, endDate } = vacation;
            const vacationInterval: Date[] = eachDayOfInterval({start: startDate, end: endDate});
            vacationInterval.forEach(day => {
                if(day.getMonth() === currentDate.getMonth() && day.getFullYear() === currentDate.getFullYear() && !isWeekend(day)){
                    quantity += 1;
                }
            });
        }
    });
    return quantity;
}

export const getVacationsOnColumn = (day: Day, vacations: Vacation[]): number => {
    let count:number = 0;

    vacations.forEach(vacation => {
        let { startDate, endDate } = vacation;
        const vacationInterval: Date[] = eachDayOfInterval({start: startDate, end: endDate});
        vacationInterval.forEach(vacationDay => {
            if(isSameDay(day.date, vacationDay) && !isWeekend(day.date)){
                count += 1;
            }
        });
    })
    return count;
}

export const vacationSearch = (vacations: Vacation[], userId: number, day: Day): Vacation | null => {
    let matchVacation: Vacation | null = null;
    vacations.forEach(vacation => {
        if(vacation.userId != userId){
            return;
        }

        let { startDate, endDate } = vacation;
        endDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() + 1); //+1 потому что isWithinInterval считает не включая последний день
        if(isWithinInterval(day.date, {start: startDate, end: endDate})){
            matchVacation = vacation;

        }
    });
    return matchVacation;
}

export const vacationColor=(props:string)=>{
    return(
        styled.td`
            &:after{
                content: '';
                position: absolute;
                top: 2px;
                bottom: 2px;
                display: block;
                width: 100%;
                height: calc(100%-2px);
                background-color: ${props};
                border: 1px solid ${props};
            }
        `
    )
}