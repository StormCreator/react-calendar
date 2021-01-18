import React from 'react';
import './calendarFooter.css'
import { Vacation } from '../../utils/models/vacation';
import { getVacationsOnColumn, setTotalMonthVacation } from '../../utils/functions/vacations';
import { isWeekend } from 'date-fns';
import { Day } from '../../utils/models/day';



interface footerProps{
    daysInMonth: Day[],
    monthName: string,
    vacations: Vacation[],
    currentDate: Date
}


const CalendarFooter = (props: footerProps) => {

    const { monthName, daysInMonth, vacations, currentDate } = props;

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
                            <span>{setTotalMonthVacation(vacations, currentDate)}</span>
                            <span>12%</span> 
                        </div>
                    </div>
                </td>
            </tr>
        </tfoot>
    )
}

export default CalendarFooter;