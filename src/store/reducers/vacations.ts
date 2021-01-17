
const initialState = {
    vacationList: [
        {
            startDate: new Date(2021, 0, 15),
            endDate: new Date(2021, 0, 16),
            type: 'paid',
            userId: 1
        },
        {
            startDate: new Date(2021, 0, 25),
            endDate: new Date(2021, 0, 30),
            type: 'paid',
            userId: 1
        },
        {
            startDate: new Date(2021, 0, 5),
            endDate: new Date(2021, 0, 11),
            type: 'paid',
            userId: 2
        },
        {
            startDate: new Date(2021, 1, 5),
            endDate: new Date(2021, 1, 16),
            type: 'paid',
            userId: 2
        },
        {
            startDate: new Date(2021, 0, 1),
            endDate: new Date(2021, 0, 10),
            type: 'paid',
            userId: 3
        },
        {
            startDate: new Date(2021, 0, 20),
            endDate: new Date(2021, 0, 20),
            type: 'paid',
            userId: 3
        },
        {
            startDate: new Date(2021, 0, 25),
            endDate: new Date(2021, 1, 2),
            type: 'paid',
            userId: 4
        }
    ]
}

export const  vacationsReducer = (state = initialState.vacationList) => {
    return state;
}