import React from 'react';
import './monthSwitcher.css';
import { Component } from 'react';
import arrowPrev from '../../assets/img/arrow-prev.svg';
import arrowNext from '../../assets/img/arrow-next.svg';

export interface MonthSwitcherProps{
    dateChanger: Function
    monthName: string
}

class MonthSwitcher extends Component<MonthSwitcherProps> {

    constructor(props: MonthSwitcherProps){
        super(props);
    }

    render(){
        return(
            <thead>
                <tr className="month-switcher">
                    <td>
                        <button onClick = {() => this.props.dateChanger(-1)}>
                            <img src={arrowPrev} alt="prev-arrow-icon"/>
                        </button>
                        <span>{this.props.monthName}</span>
                        <button onClick = {() => this.props.dateChanger(1)}>
                            <img src={arrowNext} alt="nex-arrow-icon"/>
                        </button>
                    </td>
                </tr>
            </thead>
        )
    }


   
} 

export default MonthSwitcher;