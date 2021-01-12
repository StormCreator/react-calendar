import React from 'react';
import './calendarFooter.css'
import { Day } from '../../utils/day';


interface footerProps{
    daysInMonth: Day[],
    monthName: string
}


const CalendarFooter = (props: footerProps) => {

    const { monthName, daysInMonth } = props;

    return(
        <tfoot>
            <tr>
                <td>
                    <p>Day Person Stats</p>
                </td>
                {daysInMonth.map(day => (
                    <td key={day.date.toDateString()} className="dayCell">

                    </td>
                ))}
                <td className="dayCell">

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