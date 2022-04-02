const initialState = {
  budget: 100,
  spent: 20,
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
    case "APPEND_EXPENSE":
      // Add new expense to list
      newState.expenses = action.payload;
      console.log(newState);
      break;
    default:
      return initialState;
  }
  return newState;
};

export default SaveBudget;
