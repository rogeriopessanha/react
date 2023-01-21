
export default function reserve(state = [], action) {
    switch (action.type) {
        case 'ADD_RESERVE':
            return [...state,{
             ...action.trip,
             amount: 1,  
            } ];
        default:
            return state
    }
}