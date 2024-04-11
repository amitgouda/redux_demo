const INITIAL_STATE = {
  personalDetails: { name: "user  ka naam", gender: "", age: null },
  address: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  // The reducer normally looks at the action type field to decide what happens

  switch (action.type) {
    case "USER_NAME":
      //state.personalDetails.name = action.payload;
      // state.address = action.payload;

      return {
        ...state,
        address: action.payload,
      };

      break;
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};
