import './monthSwitcher.css';
import { Component } from 'react';
import arrowPrev from '../../assets/img/arrow-prev.svg';
import arrowNext from '../../assets/img/arrow-next.svg';

export interface MonthSwitcherProps{
    dateChanger: Function
    monthName: string
}

class MonthSwitcher extends Component<MonthSwitcherProps> {

    render(){
        return(
            <div className="month-switcher">
                <button onClick = {(e) => this.props.dateChanger(e, -1)}>
                    <img src={arrowPrev} alt="prev-arrow-icon"/>
                </button>
                <span>{this.props.monthName}</span>
                <button onClick = {(e) => this.props.dateChanger(e, 1)}>
                    <img src={arrowNext} alt="nex-arrow-icon"/>
                </button>
            </div>
        )
    }
} 

export default MonthSwitcher;