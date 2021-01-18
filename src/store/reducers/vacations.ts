
const initialState = {
    vacationList: [
        {
            startDate: new Date(2021, 0, 15),
            endDate: new Date(2021, 0, 17),
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
            endDate: new Date(2021, 0, 31),
            type: 'paid',
            userId: 4
        },
        {
            startDate: new Date(2021, 0, 1),
            endDate: new Date(2021, 0, 10),
            type: 'paid',
            userId: 5
        },
        {
            startDate: new Date(2021, 0, 12),
            endDate: new Date(2021, 0, 12),
            type: 'paid',
            userId: 6
        },
        {
            startDate: new Date(2021, 0, 23),
            endDate: new Date(2021, 0, 25),
            type: 'paid',
            userId: 6
        },
        {
            startDate: new Date(2020, 11, 23),
            endDate: new Date(2020, 11, 25),
            type: 'paid',
            userId: 1
        },
        {
            startDate: new Date(2020, 11, 11),
            endDate: new Date(2020, 11, 30),
            type: 'paid',
            userId: 4
        },
        {
            startDate: new Date(2020, 11, 8),
            endDate: new Date(2020, 11, 15),
            type: 'paid',
            userId: 6
        }
    ]
}

export const  vacationsReducer = (state = initialState.vacationList) => {
    return state;
}