const initialState = {
    vacationList: [
        {
            startDate: new Date(2021, 1, 15),
            endDate: new Date(2021, 1, 16),
            type: 'paid',
            userId: 1
        },
        {
            startDate: new Date(2021, 1, 15),
            endDate: new Date(2021, 1, 16),
            type: 'paid',
            userId: 2
        },
        {
            startDate: new Date(2021, 1, 15),
            endDate: new Date(2021, 1, 16),
            type: 'paid',
            userId: 3
        }
    ]
}

export const  vacationsReducer = (state = initialState.vacationList) => {
    return state;
}