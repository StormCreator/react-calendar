import { Team } from '../../utils/team';

const initialState = {
    teams: [
        {
            id:1,
            name:'Frontend',
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
        },
        {
            id:2,
            name:'Backend',
            users:[
                {
                    id:3,
                    name:'Back End team user 1',
                    email:'3@fsas.dfs',
                    teamId:2
                },
                {
                    id:4,
                    name:'Back End team user 2',
                    email:'4@fsas.dfs',
                    teamId:2
                }
            ]
        }
    ],
}

export const teamsReducer = (state = initialState.teams) => {
    return state;
}