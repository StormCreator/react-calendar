import { Day } from '../../utils/models/day';
import { Vacation } from '../../utils/models/vacation';
import { vacationSearch } from '../../utils/functions/vacations';
import { isWithinInterval, isSameDay, eachDayOfInterval } from 'date-fns'
import './dayCell.css';

interface DayCellProps{
    day: Day,
    vacations: Vacation[],
    userId: number
}


const DayCell = (props: DayCellProps) => {

    const {vacations, userId, day} = props;

    const isVacationCenter = ():boolean => {
        let isCenter = false;
        const matchingVacation = vacationSearch(vacations, userId, day);
        if(matchingVacation){
            let { startDate, endDate } = matchingVacation;
            const vacationInterval: Date[] = eachDayOfInterval({start: matchingVacation.startDate, end: matchingVacation.endDate});
            if(vacationInterval.length % 2 !== 0){
                const centerOfInterval: number = Math.floor(vacationInterval.length / 2);
                console.log(centerOfInterval);
                if(isSameDay(vacationInterval[centerOfInterval], day.date)){
                    isCenter = true;
                }
            }else{

            }
        }
        return isCenter;
    }

    const getVacationDayType = ():string => {
        let vacationDayType: string = 'vacation';
        const matchingVacation = vacationSearch(vacations, userId, day);
        if(matchingVacation){
            let { startDate, endDate } = matchingVacation;
            if(isSameDay(startDate, day.date) && isSameDay(endDate, day.date)){
                return vacationDayType = 'vacation-day';
            }
            if(isSameDay(startDate, day.date)){
                return vacationDayType = 'vacation-start';
            }
            if(isSameDay(endDate, day.date)){
                return vacationDayType = 'vacation-end';
            }
        } 
        return vacationDayType;
    }
    

    const vacationMatch = ():boolean => {
        let isMatch = false;
        const matchingVacation = vacationSearch(vacations, userId, day);
        if(matchingVacation){
            isMatch = true;
        }
        return isMatch;
    }

    if(vacationMatch()){
        return(
            <td key={props.day.date.toString()} className={`daycell ${props.day.isWeekend?'weekend':''} ${getVacationDayType()}`}>
                {isVacationCenter()? <span className="vacation-type">{vacationSearch(vacations, userId, day)?.type}</span>: ''}
            </td>
        )
    }

    return(
        <td key={props.day.date.toString()} className={`daycell ${props.day.isWeekend?'weekend':''}`}>
            {''}
        </td>
    )


    

}

export default DayCell;