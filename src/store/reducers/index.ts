import { combineReducers } from 'redux';
import { vacationsReducer } from './vacations';
import { userReducer } from './users';
import { teamsReducer } from './teams';

export const rootReducer = combineReducers({
    vacations: vacationsReducer,    
    user: userReducer,
    teams: teamsReducer
})