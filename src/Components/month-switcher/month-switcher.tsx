import './monthSwitcher.css';
import arrowPrev from '../../assets/img/arrow-prev.svg';
import arrowNext from '../../assets/img/arrow-next.svg';

export interface MonthSwitcherProps{
    dateChanger: Function
    monthName: string
}


const MonthSwitcher = (props: MonthSwitcherProps) => {
    const { monthName, dateChanger } = props; 
    return(
        <div className="month-switcher">
            <button onClick = {(e) => props.dateChanger(e, -1)}>
                <img src={arrowPrev} alt="prev-arrow-icon"/>
            </button>
            <span>{monthName}</span>
            <button onClick = {(e) => dateChanger(e, 1)}>
                <img src={arrowNext} alt="nex-arrow-icon"/>
            </button>
        </div>
    )
}

export default MonthSwitcher;