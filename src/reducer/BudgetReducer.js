const initialState = {
  budget: 100,
  spent: 20,
  // remaining: 0,
  expenses: [
    { name: "cheese", cost: 2 },
    { name: "bread", cost: 3 },
  ],
};

const SaveBudget = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "SAVE_BUDGET":
      // Change budget value to input value
      newState.budget = action.payload;
      return newState;
    case "ADD_EXPENSE":
      // Add new expense to list
      newState.expenses.push(action.payload);
      return newState;
    // Calculate new  spent value when expenses are input
    case "CALC_SPENT_VAL":
      newState.spent = Number(newState.spent) + Number(action.payload);
      return newState;
    default:
      return initialState;
  }
};

export default SaveBudget;
