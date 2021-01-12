import React from 'react';
import { Day } from '../../utils/day';
import './calendarHead.css';
import { format } from 'date-fns';


interface CalendarProps{
    daysInMonth: Day[]
}

const CalendarHead = (props: CalendarProps) => {


    return (
        <thead>
            <tr className="calendar">
                <td className="calendar__day">
                    <button className="modal-button">Add Vacation</button>
                </td>
                {props.daysInMonth.map(day => (
                    <td key={day.date.toDateString()} className={`calendar__day ${day.isWeekend ? "weekend" : ""}`}>
                        <span>
                            {format(day.date, 'EEEEEE')}
                        </span>
                        <span>
                            {day.date.getDate()}
                        </span>
                    </td>
                ))}
                <td className="calendar__day">
                    <p>Sum</p>
                </td>
            </tr>
        </thead>
    )
}

export default CalendarHead;