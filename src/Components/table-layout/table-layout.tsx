import React, { FormEvent } from 'react';
import { Component } from "react";
import { TableState } from '../../utils/tableState';
import './tableLayout.css';
import MonthSwitcher from '../month-switcher';
import TeamTable from '../team';
import CalendarFooter from '../calendar-footer';
import { add, format, setDate, isWeekend } from 'date-fns';
import CalendarHead from "../calendar-head";
import { Day } from '../../utils/day';
import { User } from '../../utils/user';
import { Team } from '../../utils/team';
import { connect } from 'react-redux';
import { isVacation } from '../../utils/services/isVacation';
import {differenceInCalendarDays, getDaysInMonth, isSameDay, startOfMonth} from 'date-fns';
import CalendarHead from "../calendar-head";
import Modal from '../modal';


class TableLayout extends React.Component<any,TableState>{
    state:TableState={
        currentDate:  new Date(),
        daysInMonth: [],
        modalOpened: false,
        modalState:'loading'
    };
    processModal = (event:any)=>{
        event.preventDefault();
        const form = event.target;
        //console.log(form.startDate.value,form.endDate.value)
        if(differenceInCalendarDays(new Date(form.endDate.value),new Date(form.startDate.value))<0){
            this.setState({modalState:'error'});
        }
        //console.log(form.vacType.value);
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
                    />
            
                </table>
                 <Modal 
                    currentDate={isSameDay(this.state.currentDate, new Date)?this.state.currentDate:startOfMonth(this.state.currentDate)} 
                    handleSubmit={this.processModal} close={()=>{this.setState({modalOpened: false , modalState:'loading'})}} 
                    isOpened={this.state.modalOpened} modalState={this.state.modalState}>
                    </Modal>

            </>
        )
    }}


    const mapStateToProps = (store:any) => {
        return {
            vacations: store.vacations,
            teams: store.teams
        }
    }


export default connect(mapStateToProps)(TableLayout);
