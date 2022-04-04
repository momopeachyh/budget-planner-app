const initialState = {
  budget: 100,
  spent: 9,
  // remaining: 0,
  expenses: [
    { name: "cheese", cost: 2, key: "cheese" },
    { name: "bread", cost: 3, key: "bread" },
    { name: "jam", cost: 4, key: "jam" },
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
      // newState.expenses.push(action.payload);
      return { ...state, expenses: [...state.expenses, action.payload] };

    // Calculate new  spent value when expenses are input
    case "INC_SPENT_VAL":
      newState.spent = Number(newState.spent) + Number(action.payload);
      return newState;
    case "DELETE_EXPENSE":
      newState.expenses = newState.expenses.filter(
        (expense) => expense.name !== action.payload
      );

    case "DEC_SPENT_VAL":
      newState.spent = Number(newState.spent) - Number(action.payload);
      console.log(newState.spent);
      // console.log(newState.spent);
      return newState;
    default:
      return initialState;
  }
};

export default SaveBudget;
