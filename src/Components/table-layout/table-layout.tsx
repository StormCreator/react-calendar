import React from 'react';
import { Component } from "react";
import './tableLayout.css';
import MonthSwitcher from '../month-switcher';
import CalendarHead from "../calendar-head";
import { Day } from '../../Utils/Day';
import { add, format, getDaysInMonth, setDate, isWeekend } from 'date-fns';

interface TableState{
    currentDate: Date
    daysInMonth: Day[]
}

class TableLayout extends Component<{}, TableState>{
    constructor(props: any){
        super(props);
        this.state = {
            currentDate:  new Date(),
            daysInMonth: []
        }
    }
    componentDidMount(){
        this.switchMonth = this.switchMonth.bind(this);
        this.setDaysInMonth = this.setDaysInMonth.bind(this);
        this.setState({daysInMonth: this.setDaysInMonth(this.state.currentDate)});
    }

    protected switchMonth(e: Event, switchDirection: number): void{
        let { currentDate, daysInMonth } = this.state;
        const newDate: Date = add(currentDate , {  months: switchDirection });
        daysInMonth = this.setDaysInMonth(newDate);
        this.setState({
            currentDate: newDate,
            daysInMonth: daysInMonth
        });
    }


    private setDaysInMonth(currentDate: Date): Day[]{
        let daysArray: Day[] = [];
        for(let i = 1; i <= getDaysInMonth(currentDate); i++){
            let date: Date = setDate(currentDate, i);
            let day: Day = {
                date: date,
                isWeekend: isWeekend(date),
            }
            daysArray.push(day);
        }
        return daysArray;
    }

    render(){
        return(
            <>
                <MonthSwitcher 
                    dateChanger = {this.switchMonth}
                    monthName = {format(this.state.currentDate, 'MMMM')}
                />
                <table>
                    <CalendarHead 
                        daysInMonth = {this.state.daysInMonth}
                    />
                </table>
            </>
           
        );
    }

}





export default TableLayout;
