import { Team } from '../../utils/models/team';

const initialState = {
    teams: [
        {
            id:1,
            name:'Frontend',
            color:'#efadfd',
            users:[
                {
                    id:1,
                    name:'Frontend team user 1',
                    email:'1@fsas.dfs',
                    teamId:1
                },
                {
                    id:2,
                    name:'Frontend team user 2',
                    email:'2@fsas.dfs',
                    teamId:1
                },
                {
                    id:3,
                    name:'Frontend team user 3',
                    email:'2@fsas.dfs',
                    teamId:1
                },
            ]
        },
        {
            id:2,
            name:'Backend',
            color:'#000',
            users:[
                {
                    id:4,
                    name:'Backend team user 1',
                    email:'3@fsas.dfs',
                    teamId:2
                },
                {
                    id:5,
                    name:'Backend team user 2',
                    email:'4@fsas.dfs',
                    teamId:2
                }
            ]
        },
        {
            id:3,
            name:'Designers',
            color:'#adf',
            users:[
                {
                    id:6,
                    name:'Designers team user 1',
                    email:'3@fsas.dfs',
                    teamId:2
                }
            ]
        }
    ],
}

export const teamsReducer = (state = initialState.teams) => {
    return state;
}