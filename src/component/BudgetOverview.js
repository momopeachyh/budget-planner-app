import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./BudgetOverview.css";
// import OverviewAction from "../action/OverviewAction";
function BudgetOverview() {
  const dispatch = useDispatch();
  const budgetValue = useSelector((state) => state.budget);
  const spentValue = useSelector((state) => state.spent);
  const remainderValue = budgetValue - spentValue;

  function editBudget() {
    // Hide current budget
    const budgetDisplay = document.getElementById("budgetDisplay");
    budgetDisplay.classList.add("hidden");

    // Show budget input bar
    const budgetInput = document.getElementById("budgetInput");
    budgetInput.classList.remove("hidden");

    // Hide edit button
    const editBtn = document.getElementById("editBtn");
    editBtn.classList.add("hidden");

    // Show save button
    const saveBtn = document.getElementById("saveBtn");
    saveBtn.classList.remove("hidden");
  }

  function handleSave(e) {
    e.preventDefault();
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

    dispatch({
      type: "SAVE_BUDGET",
      payload: budgetInput.value,
    });
  }

  return (
    <div className="BudgetOverview">
      <h1>My Budget Planner</h1>
      <div className="row overview-row">
        <div className="col overview-item budget">
          <h4 id="budgetDisplay" className="">
            Budget: ${budgetValue}
          </h4>
          <input type="number" id="budgetInput" className="hidden"></input>
          <button
            className="btn btn-primary edit-budget-btn"
            onClick={editBudget}
            id="editBtn"
          >
            Edit
          </button>
          <button
            className="btn btn-primary save-budget-btn hidden"
            id="saveBtn"
            onClick={handleSave}
          >
            Save
          </button>
        </div>

        <div className="col overview-item remainder">
          <h4>Remaining: ${remainderValue}</h4>
        </div>

        <div className="col overview-item total-expenditures">
          <h4>Spent so far: ${spentValue}</h4>
        </div>
      </div>
    </div>
  );
}

export default BudgetOverview;
