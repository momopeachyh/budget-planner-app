import React from "react";
import "./ExpensesList.css";

function ExpensesList(props) {
  return (
    <div>
      <h2>Expenses</h2>
      {/* <input
        type="email"
        className="form-control add-input-bar"
        placeholder="Enter an item"
      /> */}

      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>

      <div class="input-group add-input">
        <input type="text" class="form-control" placeholder="Item" />
        <input type="text" class="form-control" placeholder="Cost" />
        <button class="btn btn-primary">+</button>
      </div>
    </div>
  );
}

export default ExpensesList;
