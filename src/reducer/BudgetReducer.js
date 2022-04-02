const initialState = {
  budget: 0,
  spent: 0,
  // remaining: 0,
  expenses: {},
};

const SaveBudget = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "SAVE_BUDGET":
      // Change budget value to input value
      newState.budget = action.payload;
      break;
    default:
      return initialState;
  }
  return newState;
};

export default SaveBudget;
