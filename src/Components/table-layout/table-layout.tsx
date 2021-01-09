import React from 'react';
import { Component } from "react";
import { TableState } from '../../utils/tableState';
import { User } from '../../utils/user';
import MonthSwitcher from '../month-switcher';
import TeamTable from '../team';
import {getDaysInMonth, startOfMonth} from 'date-fns';
import TableHeader from '../table-head';

class TableLayout extends React.Component<any,TableState>{
    state:TableState={
        teams:[
            {
                id:1,
                name:'Front End team',
                retracted:false,
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
            }
        ],
        vacations:[],
        currentDate:startOfMonth(new Date()),
        daysInMonth:getDaysInMonth(new Date())
    };

    render(){
        return(
            <table>
                <MonthSwitcher />
                <TableHeader daysInMonth={this.state.daysInMonth} currentDate={this.state.currentDate}/>
                {
                    this.state.teams.map((team)=>{

                        const teamProps={
                            key:team.id,
                            name:team.name,
                            users:team.users,
                            retracted:team.retracted,
                            switchVisibility:()=>{team.retracted=!team.retracted},
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
            </table>
        );
    }
}

export default TableLayout;
