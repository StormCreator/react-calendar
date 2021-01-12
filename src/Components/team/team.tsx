import { th } from "date-fns/locale";
import React from "react";
import { Day } from "../../utils/day";
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
    renderVacationsForUser(userId?:number):string[]{
        let arr=[];
        for(let i=0;i<this.props.daysInMonth.length;i++){
            arr.push('');
        }
        return arr;
    }
    render(){
        return (<tbody>
            <tr>
                <th>
                {
                    this.props.name
                }
                </th>
                {
                    this.renderVacationsForUser().map((item)=>{
                        return(
                            <td className={'daycell'}>
                                {item}
                            </td>
                        )
                    })
                }
            </tr>
                {
                    this.props.users.map((user)=>{
                        return ( <tr>
                            <th>{user.name}</th>
                        {
                            this.renderVacationsForUser(user.id).map((item)=>{
                                return(
                                    <td>
                                        {item}
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