import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any


    switch (action.type) {

        case 'sort': { // by name
            let sortUp = state.map(el => ({...el}))

            if (action.payload === 'up') {
                sortUp = sortUp.sort((a ,b) => a.name > b.name ? 1 : -1)
            } else if (action.payload === 'down') {
                sortUp = sortUp.sort((a ,b) => a.name > b.name ? -1 : 1)
            }
            return sortUp
        }
        case 'check': {
            let stateCopy = state.map(el => ({...el})) // need to fix
            return stateCopy.filter(el => el.age > action.payload)
        }


        default:
            return state
    }
}