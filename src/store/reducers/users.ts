const initialState = {
    usersList: [
        {
            id: 1,
            name: 'Dima',
            email: 'dasd@gmail.com',
            teamId: 1
        },
        {
            id: 2,
            name: 'Dima',
            email: 'dasd@gmail.com',
            teamId: 2
        },
        {
            id: 3,
            name: 'Dima',
            email: 'dasd@gmail.com',
            teamId: 3
        }
    ]
}

export const userReducer = (state = initialState.usersList) => {

    return state;
}