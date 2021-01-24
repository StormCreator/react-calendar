import React from "react";
import { Day } from "../../utils/models/day";
import { Vacation } from "../../utils/models/vacation";
import { Team } from '../../utils/models/team';
import hideArrow from '../../assets/img/hide-arrow.svg';
import teamPeople from '../../assets/img/team-people.svg';
import './teamTable.css';
import { getVacationQuantity } from '../../utils/functions/vacations';
import DayCell  from '../day-cell';
import Radium from 'radium';

interface TeamProps{
    team: Team,
    daysInMonth: Day[],
    vacations: Vacation[],
    currentDate: Date
}
interface TeamState{
    retracted:boolean;
}

class TeamTable extends React.Component<TeamProps,TeamState>{
    
    constructor(props: TeamProps){
        super(props);
        this.state={
            retracted: false,
        }
    }
    private switchVisibility= (): void =>{
        this.setState({retracted:!this.state.retracted});
    }

    render(){
        const teamColor = this.props.team.color;
        const blStyle ={borderLeft: `3px solid ${teamColor}`};
        
        const { retracted } = this.state;
        const {
            team: { users, id, name, },
            daysInMonth,
            vacations,
            currentDate,
        } = this.props;
        return (<tbody className={retracted?" retracted":'' }>
            <tr key={'tr1'}>
                <th style={blStyle}>
                    <div className="team__title">
                        <p>
                            {name}
                        </p>
                        <div className="team__title-peoples">
                            <img src={teamPeople} alt="people-icon"/>
                            <span>{users.length}</span>
                        </div>
                        <button onClick={this.switchVisibility} className="hide-arrow">
                            <img src={hideArrow} alt="hide-icon"/>
                        </button>
                    </div>
                </th>
                {
                    daysInMonth.map((item)=>{
                        return(
                            <td className={`daycell ${item.isWeekend?'weekend':''}`} key={item.date.toString()}>
                                
                            </td>
                        )
                    })
                }
                <td className="dayCell">

                </td>
            </tr >
                {
                    users.map((user)=>{
                        return ( <tr key={user.id+'tr'} className={'userRow'}>
                            <th key={user.id} className="team__user" style={blStyle}>{user.name}</th>
                        {
                            daysInMonth.map((day)=>{
                                return(
                                    <DayCell 
                                        day={day}
                                        vacations={vacations}
                                        userId={user.id}
                                        key={day.date.toString()}
                                        color={teamColor}
                                    />
                                )
                            })
                        }
                            <td className="dayCell sum-column">
                                <span>{ getVacationQuantity(user.id, vacations, currentDate)}</span>
                            </td>
                        </tr>
                        )
                    })
                }
        </tbody>)
    }
}



export default Radium(TeamTable);