const initialState = {
  budget: 0,
  spent: 0,
  remaining: 0,
  expenses: {},
};

const SaveBudget = (state = initialState, action) => {
  let newBudget = state.budget;
  switch (action.type) {
    case "SAVE_BUDGET":
      // Change budget value to input value
      newBudget = action.payload;
      return newBudget;
    default:
      return 0;
  }
};

export default SaveBudget;
