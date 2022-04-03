const initialState = {
  budget: 100,
  spent: 20,
  // remaining: 0,
  expenses: [],
};

const SaveBudget = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "SAVE_BUDGET":
      // Change budget value to input value
      newState.budget = action.payload;
      break;
    case "ADD_EXPENSE":
      // Add new expense to list
      newState.expenses.push(action.payload);

      break;
    // Calculate new  spent value when expenses are input
    case "CALC_SPENT_VAL":
      newState.spent = Number(newState.spent) + Number(action.payload);
      break;
    default:
      return initialState;
  }
  return newState;
};

export default SaveBudget;
