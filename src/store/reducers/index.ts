import { combineReducers } from 'redux';
import { vacationsReducer } from './vacations';
import { userReducer } from './users';

export const rootReducer = combineReducers({
    vacations: vacationsReducer,    
    user: userReducer,
})