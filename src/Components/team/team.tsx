import React from "react";
import { Day } from "../../utils/day";
import { User } from "../../utils/user";
import { Vacation } from "../../utils/vacation";
import { TeamsColors } from "../../utils/teamColors";
import hideArrow from '../../assets/img/hide-arrow.svg';
import teamPeople from '../../assets/img/team-people.svg';
import './teamTable.css';

interface TeamProps{
    key:number;
    name:string;
    users:User[];
    currentDate:Date; //зачем?
    vacations:Vacation[];
    daysInMonth:Day[];
}

class TeamTable extends React.Component<TeamProps,any>{
    state={
        retracted:false
    }
    switchVisibility=()=>{
        this.setState({retracted:!this.state.retracted});
    }
    render(){
        return (<tbody className={this.state.retracted?" retracted":''}>
            <tr key={'tr1'}>
                <th>
                    <div className="team__title">
                        <p>
                            {this.props.name}
                        </p>
                        <div className="team__title-peoples">
                            <img src={teamPeople} alt="people-icon"/>
                            <span>{this.props.users.length}</span>
                        </div>
                        <button onClick={this.switchVisibility} className="hide-arrow">
                            <img src={hideArrow} alt="hide-icon"/>
                        </button>
                    </div>
                </th>
                {
                    this.props.daysInMonth.map((item)=>{
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
                    this.props.users.map((user)=>{
                        return ( <tr key={user.id+'tr'} className={'userRow'}>
                            <th key={user.id} className="team__user">{user.name}</th>
                        {
                            this.props.daysInMonth.map((item)=>{
                                return(
                                    <td key={item.date.toString()} className={`daycell ${item.isWeekend?'weekend':''}`}>
                                        {''}
                                    </td>
                                )
                            })
                        }
                            <td className="dayCell">

                            </td>
                        </tr>
                        )
                    })
                }
        </tbody>)
    }
}

export default TeamTable