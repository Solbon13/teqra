import { SET_COIN, SET_CONSUMPTION, SET_PLAN } from "../utils/const"


let initialState = {
    coin: 100,
    сonsumption: 48,
    plan: [
        {
            plan: 'План 1',
            term: 10,
            minInvestments: '50',
            maxInvestments: '499',
            minAccruals: '1.10',
            maxAccruals: '1.50',
            output: 'Да',
            dailyWithdrawal: 'Да'
        },
        {
            plan: 'План 2',
            term: 25,
            minInvestments: '500',
            maxInvestments: '4999',
            minAccruals: '1.50',
            maxAccruals: '1.90',
            output: 'Да',
            dailyWithdrawal: 'Да'
        },
        {
            plan: 'План 3',
            term: 40,
            minInvestments: '5000',
            maxInvestments: '49999',
            minAccruals: '1.90',
            maxAccruals: '2.30',
            output: 'Да',
            dailyWithdrawal: 'Да'
        },
        {
            plan: 'План 4',
            term: 50,
            minInvestments: '50000',
            maxInvestments: '1000000',
            minAccruals: '2.30',
            maxAccruals: '3.00',
            output: 'Да',
            dailyWithdrawal: 'Да'
        },
        {
            plan: 'VIP',
            term: 60,
            minInvestments: '500',
            maxInvestments: '1000000',
            minAccruals: '2.70',
            maxAccruals: '4.50',
            output: 'Нет',
            dailyWithdrawal: 'Да'
        },
        {
            plan: 'VIP Plus',
            term: 180,
            minInvestments: '50',
            maxInvestments: '1000000',
            minAccruals: '5.00',
            maxAccruals: '5.00',
            output: 'Да',
            dailyWithdrawal: 'Нет'
        }
    ]
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COIN:
            return {
                ...state,
                coin: +action.payload
            }
        case SET_CONSUMPTION:
            return {
                ...state,
                сonsumption: +action.payload
            }
        case SET_PLAN:
            return {
                ...state,
                plan: action.payload
            }
        default:
            return state
    }
}

export const coinStore = (coin) => {
    return { type: SET_COIN, payload: coin }
}
export const сonsumptionStore = (сonsumption) => {
    return { type: SET_CONSUMPTION, payload: сonsumption }
}
export const planStore = (plan) => {
    return { type: SET_PLAN, payload: plan }
}

export default mainReducer