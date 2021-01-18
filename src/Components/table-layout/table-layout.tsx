import React, { FormEvent } from 'react';
import { Component } from "react";
import './tableLayout.css';
import MonthSwitcher from '../month-switcher';
import TeamTable from '../team';
import CalendarFooter from '../calendar-footer';
import { add, format, setDate, isWeekend } from 'date-fns';
import CalendarHead from "../calendar-head";
import { Day } from '../../utils/models/day';
import { Team } from '../../utils/models/team';
import { Store } from '../../utils/models/store';
import { setTotalMonthVacation } from '../../utils/functions/vacations';
import { connect } from 'react-redux';
import {differenceInCalendarDays, getDaysInMonth, isSameDay, startOfMonth} from 'date-fns';
import Modal from '../modal';

interface TableState{
    currentDate:Date;
    daysInMonth:Day[];
    modalOpened:boolean;
    modalState:string;
}



class TableLayout extends React.Component<any,TableState>{
    state:TableState={
        currentDate:  new Date(),
        daysInMonth: [],
        modalOpened: false,
        modalState:'loading',
    };
    processModal = (event:React.FormEvent<HTMLFormElement>):void=>{
        event.preventDefault();
        const form = event.target;
        if(differenceInCalendarDays(new Date(((form as HTMLFormElement).endDate as HTMLInputElement).value),new Date(((form as HTMLFormElement).startDate as HTMLInputElement).value))<0){
            this.setState({modalState:'error'});
        }
    }
    componentDidMount(){
        const { currentDate } = this.state;
        this.switchMonth = this.switchMonth.bind(this);
        this.setDaysInMonth = this.setDaysInMonth.bind(this);
        this.setState({daysInMonth: this.setDaysInMonth(currentDate)});
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
                isVac: false
            }
            daysArray.push(day);
        }
        return daysArray;
    }
    render(){
        const { currentDate, daysInMonth } = this.state;
        const { teams, vacations } = this.props;
        return(
            <>
                <MonthSwitcher 
                        dateChanger = {this.switchMonth}
                        monthName = {format(currentDate, 'MMMM')}
                />
                <table>
                    <CalendarHead daysInMonth={daysInMonth} openModal={()=>{this.setState({modalOpened:true}); setTimeout(()=>{this.setState({modalState:'error'})},1200); setTimeout(()=>{this.setState({modalState:'normal'})},7000)}}/>
                        {
                            teams.map((team: Team)=>{
                                const teamProps={
                                    team,
                                    daysInMonth,
                                    vacations,
                                    currentDate
                                }
                                return(
                                    <TeamTable
                                        {...teamProps}
                                    />
                                )
                            })
                        }
                    <CalendarFooter 
                        daysInMonth={daysInMonth}
                        monthName = {format(currentDate, 'MMMM')}
                        vacations = {vacations}
                        currentDate = {currentDate}
                    />
                </table>
                <Modal 
                    currentDate={isSameDay(this.state.currentDate, new Date)?this.state.currentDate:startOfMonth(this.state.currentDate)} 
                    handleSubmit={this.processModal} close={()=>{this.setState({modalOpened: false , modalState:'loading'})}} 
                    isOpened={this.state.modalOpened} modalState={this.state.modalState}/>
            </>
        )
    }}


    const mapStateToProps = (store: Store) => {
        return {
            vacations: store.vacations,
            teams: store.teams
        }
    }


export default connect(mapStateToProps)(TableLayout);
