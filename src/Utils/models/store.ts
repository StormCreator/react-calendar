import { Vacation } from './vacation';
import { User } from './user';
import { Team } from './team';

export interface Store{
    vacations: Vacation[],
    users: User[],
    teams: Team[]
}