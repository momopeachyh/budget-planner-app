const initialState = {
  budget: 100,
  spent: 9,
  // remaining: 0,
  expenses: [
    { name: "cheese", cost: 2, key: 101 },
    { name: "bread", cost: 3, key: 102 },
    { name: "jam", cost: 4, key: 103 },
  ],
  expenseCount: 4,
};

const SaveBudget = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "SAVE_BUDGET":
      newState.budget = action.payload;
      return newState;
    case "ADD_EXPENSE":
      newState.expenseCount = Number(newState.expenseCount) + 1;
      return { ...newState, expenses: [...state.expenses, action.payload] };
    case "INC_SPENT_VAL":
      newState.spent = Number(newState.spent) + Number(action.payload);
      return newState;
    case "DELETE_EXPENSE":
      newState.expenses = newState.expenses.filter(
        (expense) => expense.key !== action.payload
      );
      return { ...newState, expenses: [...newState.expenses] };
    case "DEC_SPENT_VAL":
      newState.spent = Number(newState.spent) - Number(action.payload);
      return newState;
    default:
      return initialState;
  }
};

export default SaveBudget;
