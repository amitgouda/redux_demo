const INITIAL_STATE = {
  personalDetails: { name: "", gender: "", age: null },
  address: "",
};

export const settingReducer = (state = INITIAL_STATE, action) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};
