import React from "react";
import "./BudgetOverview.css";

function BudgetOverview(props) {
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
  return (
    <div className="BudgetOverview">
      <h1>My Budget Planner</h1>
      <div className="row overview-row">
        <div className="col overview-item budget">
          <h4 id="budgetDisplay" className="">
            Budget: $xxx
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
            onClick={editBudget}
            id="saveBtn"
          >
            Save
          </button>
        </div>

        <div className="col overview-item remainder">
          <h4>Remaining: $xxx</h4>
        </div>

        <div className="col overview-item total-expenditures">
          <h4>Spent so far: $xxx</h4>
        </div>
      </div>
    </div>
  );
}

export default BudgetOverview;
