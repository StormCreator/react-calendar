import React from 'react';
import { Component } from "react";
import MonthSwitcher from '../month-switcher';


class TableLayout extends Component{

    render(){
        return(
            <table>
                <MonthSwitcher />
            </table>
        );
    }
}

export default TableLayout;
