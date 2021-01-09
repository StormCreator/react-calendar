import React from 'react';
import { Component } from "react";
import './tableLayout.css';
import MonthSwitcher from '../month-switcher';
import { add, format } from 'date-fns';

interface TableState{
    currentDate: Date
}

class TableLayout extends Component<{}, TableState>{

    constructor(props: any){
        super(props);
        this.state = {
            currentDate:  new Date()
        }

        this.switchMonth = this.switchMonth.bind(this);
    }

    render(){
        return(
            <table>
                <MonthSwitcher 
                    dateChanger = {this.switchMonth}
                    monthName = {format(this.state.currentDate, 'MMMM')}
                />
            </table>
        );
    }

    protected switchMonth(switchDirection: number): void{
        this.setState({
            currentDate: add(this.state.currentDate   , {  months: switchDirection })


        });
    }

}

export default TableLayout;
