import { th } from "date-fns/locale";
import React from "react";
import { Day } from "../../utils/Day";
import { User } from "../../utils/user";
import { Vacation } from "../../utils/vacation";

interface TeamProps{
    key:number;
    name:string;
    users:User[];
    retracted:boolean;
    currentDate:Date;
    switchVisibility():void;
    vacations:Vacation[];
    daysInMonth:Day[];
}

class TeamTable extends React.Component<TeamProps,any>{
    
    render(){
        return (<tbody>
            <tr key={'tr1'}>
                <th>
                {
                    this.props.name
                }
                </th>
                {
                    this.props.daysInMonth.map((item)=>{
                        return(
                            <td className={'daycell'} key={item.date.toString()}>
                                {'dffsdfgsd'}
                            </td>
                        )
                    })
                }
            </tr >
                {
                    this.props.users.map((user)=>{
                        return ( <tr key={user.id+'tr'}>
                            <th key={user.id}>{user.name}</th>
                        {
                            this.props.daysInMonth.map((item)=>{
                                return(
                                    <td key={item.date.toString()}>
                                        {'Hello'}
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