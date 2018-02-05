export default (state = {user: '', authed: false}, action) => {
    switch (action.type) {
        case 'GETNAME':
            return {
                ...state,
                user: action.name,
                authed: action.auth
            }
        default: return state
    }
};
// user: action.name, authed: action.auth
// ...action.updates
// return {
//     ...state,
//     ...action.updates
// }