import { th } from "date-fns/locale";
import React from "react";
import { Day } from "../../utils/Day";
import { User } from "../../utils/user";
import { Vacation } from "../../utils/vacation";
import './teamTable.css';

interface TeamProps{
    key:number;
    name:string;
    users:User[];
    currentDate:Date;
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
                {
                    this.props.name
                }
                <span> users:{this.props.users.length}</span>
                <button onClick={this.switchVisibility}>hide</button>
                </th>
                {
                    this.props.daysInMonth.map((item)=>{
                        return(
                            <td className={`daycell ${item.isWeekend?'weekend':''}`} key={item.date.toString()}>
                                {''}
                            </td>
                        )
                    })
                }
            </tr >
                {
                    this.props.users.map((user)=>{
                        return ( <tr key={user.id+'tr'} className={'userRow'}>
                            <th key={user.id}>{user.name}</th>
                        {
                            this.props.daysInMonth.map((item)=>{
                                return(
                                    <td key={item.date.toString()} className={`daycell ${item.isWeekend?'weekend':''}`}>
                                        {''}
                                    </td>
                                )
                            })
                        }
                        </tr>
                        )
                    })
                }
        </tbody>)
    }
}

export default TeamTable