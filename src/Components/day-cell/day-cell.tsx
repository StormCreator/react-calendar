
import { Day } from '../../utils/models/day';
import { Vacation } from '../../utils/models/vacation';
import { vacationSearch } from '../../utils/functions/vacations';
import { isWithinInterval, isSameDay, eachDayOfInterval } from 'date-fns'
import './dayCell.css';
import Radium from 'radium';

interface DayCellProps{
    day: Day,
    vacations: Vacation[],
    userId: number,
    color:string
}
interface styles{
    [key:string]:string
}

const DayCell = (props: DayCellProps) => {
    const {vacations, userId, day} = props;

    const isVacationCenter = ():boolean => {
        let isCenter = false;
        const matchingVacation = vacationSearch(vacations, userId, day);
        if(matchingVacation){
            let { startDate, endDate } = matchingVacation;
            const vacationInterval: Date[] = eachDayOfInterval({start: startDate, end: endDate});
            const centerOfInterval: number = Math.floor(vacationInterval.length / 2);
            // if(vacationInterval.length %2 !== 0){

            // }
            console.log(vacationInterval[centerOfInterval - 1]);
            // console.log(centerOfInterval);
            if(isSameDay(vacationInterval[centerOfInterval], day.date)){
                isCenter = true;
            }

        }
        return isCenter;
    }

    const isOddVacation = () => {
        let isOdd: boolean = true;
        const matchingVacation = vacationSearch(vacations, userId, day);
        if(matchingVacation){
            let { startDate, endDate } = matchingVacation;
            const vacationInterval: Date[] = eachDayOfInterval({start: startDate, end: endDate});
            if(vacationInterval.length % 2 === 0){
                isOdd = false;
            }
        }
        return isOdd;
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
            <td key={props.day.date.toString()} style={{'--color':props.color}as styles} data-color={props.color} className={`daycell ${props.day.isWeekend?'weekend':''} ${getVacationDayType()}`}>
                {isVacationCenter()? <span className={`vacation-type ${isOddVacation()?'': 'odd-vacation'}`}>{vacationSearch(vacations, userId, day)?.type}</span>: ''}
            </td>
        )
    }

    return(
        <td key={props.day.date.toString()} className={`daycell ${props.day.isWeekend?'weekend':''}`}>
            {''}
        </td>
    )


    

}

export default Radium(DayCell);