// export const counterReducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT': {
//       return {
//         ...state,
//         value: state.value + 1,
//       };
//     }
//     case 'DECREMENT': {
//       return {
//         ...state,
//         value: state.value - 1,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const userReducer = (state, action) => {
//   switch (action.type) {
//     case 'GET_USER':
//       return [...state, ...action.payload];
//     default:
//       return state;
//   }
// };

let initialState = {
  getCustomerById: false,
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
      };

    case "GET_CUSTOMER_BY_ID":
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
      };

    default:
      return state;
  }
};
