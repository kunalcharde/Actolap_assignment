
const initialState =[]
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      case 'UPDATE_USER':
        const updatedUsers = [...state.users];
        updatedUsers[action.payload.index] = action.payload.user;
        return {
          ...state,
          users: updatedUsers,
        };
      case 'DELETE_USER':
        const remainingUsers = [...state.users];
        remainingUsers.splice(action.payload, 1);
        return {
          ...state,
          users: remainingUsers,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;