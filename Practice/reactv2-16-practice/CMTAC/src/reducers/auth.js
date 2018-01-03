export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
      case 'SIGNUP':
      return {
        email: 'me',
        password: 123
      };
    default:
      return state;
  }
};
