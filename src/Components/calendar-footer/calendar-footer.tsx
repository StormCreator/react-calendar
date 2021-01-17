import React from 'react';
import './calendarFooter.css'
import { Day } from '../../utils/day';
import { Vacation } from '../../utils/vacation';
import { getVacationsOnColumn } from '../../utils/functions/vacations';
import { isWeekend } from 'date-fns';


interface footerProps{
    daysInMonth: Day[],
    monthName: string,
    vacations: Vacation[]
}


const CalendarFooter = (props: footerProps) => {

    const { monthName, daysInMonth, vacations } = props;

    return(
        <tfoot>
            <tr>
                <td>
                    <p>Day Person Stats</p>
                </td>
                {daysInMonth.map(day => (
                    <td key={day.date.toDateString()} className="dayCell sum-column">
                        {!isWeekend(day.date)? getVacationsOnColumn(day, vacations): ''}
                    </td>
                ))}
                <td className="dayCell sum-column">

                </td>
            </tr>
            <tr>
                <td>
                    <div className="calendar__footer">
                        <p>{monthName} teams Summary</p>
                        <hr></hr>
                        <div className="calendar__footer-info">
                            <p>On vacation</p>
                            <span>15</span>
                            <span>12%</span> 
                        </div>
                    </div>
                </td>
            </tr>
        </tfoot>
    )
}

export default CalendarFooter;