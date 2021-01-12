import React from 'react';
import { Component } from "react";
import { TableState } from '../../utils/tableState';
import './tableLayout.css';
import { User } from '../../utils/user';
import MonthSwitcher from '../month-switcher';
import TeamTable from '../team';
import CalendarFooter from '../calendar-footer';
import {getDaysInMonth, startOfMonth} from 'date-fns';
import { add, format, setDate, isWeekend } from 'date-fns';
import CalendarHead from "../calendar-head";
import { Day } from '../../utils/day';

class TableLayout extends React.Component<any,TableState>{
    state:TableState={
        teams:[
            {
                id:1,
                name:'Frontend team',
                users:[
                    {
                        id:1,
                        name:'Front End team user 1',
                        email:'1@fsas.dfs',
                        teamId:1
                    },
                    {
                        id:2,
                        name:'Front End team user 2',
                        email:'2@fsas.dfs',
                        teamId:1
                    }
                ]
            },
            {
                id:2,
                name:'Backend team',
                users:[
                    {
                        id:3,
                        name:'Back End team user 1',
                        email:'3@fsas.dfs',
                        teamId:2
                    },
                    {
                        id:4,
                        name:'Back End team user 2',
                        email:'4@fsas.dfs',
                        teamId:2
                    }
                ]
            }
        ],
        vacations:[],
        currentDate:  new Date(),
        daysInMonth: []
    };
    
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
                <CalendarHead daysInMonth={this.state.daysInMonth}/>
                {
                    this.state.teams.map((team)=>{

                        const teamProps={
                            key:team.id,
                            name:team.name,
                            users:team.users,
                            currentDate:this.state.currentDate,
                            vacations:this.state.vacations,
                            daysInMonth:this.state.daysInMonth
                        };
                        
                        return(
                            <TeamTable
                                {...teamProps}
                            />
                        )
                    })
                }
                <CalendarFooter 
                    daysInMonth={this.state.daysInMonth}
                    monthName = {format(this.state.currentDate, 'MMMM')}
                />
            </table>
            </>
        )
    }}

export default TableLayout;
