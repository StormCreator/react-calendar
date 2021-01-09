import React from 'react';
import { Day } from '../../utils/day';

import {endOfMonth, startOfMonth , eachDayOfInterval, format} from 'date-fns';

interface HeaderProps{
    currentDate:Date;
    daysInMonth:number;
}
interface headerState{
    days:Day[];
}
class TableHeader extends React.Component<HeaderProps,any>{
    state:headerState={
        days:[]
    }
    generateDaysArray():Day[]{
        let result:Date[]=[];
        let daysArray:Day[]=[];
        for(let i=1;i<=this.props.daysInMonth; i++){
            let start = startOfMonth(this.props.currentDate);
            let end = endOfMonth(this.props.currentDate);
            result = eachDayOfInterval({ start, end});
        };
        for(let day of result){
            daysArray.push({
                date:day,
                isWeekend:format(day, 'ccc')=='sat'?true:format(day, 'ccc')=='sun'?true:false,
                dayOfWeek:format(day, 'ccc')
            })
        }
        console.log('days',daysArray);
        return daysArray;
        //this.setState({days:daysArray});
    }
    render(){
        let days:Day[]=this.generateDaysArray();
        return (
            <tbody>
                <tr>
                    <td>Add vacation</td>
                    {days.map((day)=>{
                        return(
                            <td className={day.isWeekend?'headerCell weekend':'headerCell'}>
                                <span>{day.dayOfWeek}</span>
                                <span>{format(day.date,'d')}</span>
                            </td>
                        )
                    })}
                    <td>Sum</td>
                </tr>
            </tbody>
        );
    }
}
export default TableHeader