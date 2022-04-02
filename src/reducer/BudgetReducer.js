const initialState = {
  budget: 10,
  spent: 5,
  remaining: 0,
  expenses: {},
};

const SaveBudget = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "SAVE_BUDGET":
      // Change budget value to input value
      newState.budget = action.payload;
      return newState.budget;
    default:
      return initialState;
  }
};

export default SaveBudget;
