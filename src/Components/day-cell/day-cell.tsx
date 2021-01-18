import { Day } from '../../utils/day';
import { Vacation } from '../../utils/vacation';
import { vacationColor, vacationSearch } from '../../utils/functions/vacations';
import { isWithinInterval, isSameDay, eachDayOfInterval } from 'date-fns'
import './dayCell.css';
import Radium from 'radium';
import styled from 'styled-components'
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
    const vacation = styled.td`
    &:after{
        content: '';
        position: absolute;
        top: 2px;
        bottom: 2px;
        display: block;
        width: 100%;
        height: calc(100%-2px);
        background-color: ${props.color};
        border: 1px solid ${props.color};
    }
`;
    
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
        const cell = vacationColor(props.color);
        return(
            <td key={props.day.date.toString()} /*style={cellStyle}*/style={{'--color':'#'+props.color}as styles} data-color={'#'+props.color} className={`daycell ${props.day.isWeekend?'weekend':''} ${getVacationDayType()}`}>
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

export default Radium(DayCell);