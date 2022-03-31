const initialState = 0;

const SaveBudget = (state = initialState, action) => {
  let newState = { state };
  switch (action.type) {
    case "SAVE_BUDGET":
      // Change budget value to input value
      newState = action.payload;

      const budgetInput = document.getElementById("budgetInput");
      budgetInput.classList.add("hidden");

      // Show budget display with new budget value
      const budgetDisplay = document.getElementById("budgetDisplay");
      budgetDisplay.classList.remove("hidden");

      // Show edit button
      const editBtn = document.getElementById("editBtn");
      editBtn.classList.remove("hidden");

      // Show save button
      const saveBtn = document.getElementById("saveBtn");
      saveBtn.classList.add("hidden");

      return newState;
  }
};

export default SaveBudget;
