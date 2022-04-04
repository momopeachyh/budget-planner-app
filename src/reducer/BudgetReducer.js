const initialState = {
  budget: 0,
  spent: 0,
  expenses: [],
  expenseCount: 0,
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
