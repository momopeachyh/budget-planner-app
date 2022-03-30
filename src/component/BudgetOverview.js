import React from "react";
import "./BudgetOverview.css";

function BudgetOverview(props) {
  return (
    <div className="BudgetOverview">
      <h1>My Budget Planner</h1>
      <div className="row overview-row">
        <div className="col overview-item budget">
          <h4>Budget: $xxx</h4>
          <button className="btn btn-primary edit-budget-btn">Edit</button>
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
