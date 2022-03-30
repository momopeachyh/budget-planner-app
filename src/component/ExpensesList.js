import React from "react";
import "./ExpensesList.css";

function ExpensesList(props) {
  return (
    <div>
      <h2>Expenses</h2>

      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="list-item">
              <span>First item</span>
              <div>
                <span className="badge bg-primary">?</span>
                <button className="delete-btn">
                  <i className="bi bi-x-circle-fill"></i>
                </button>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="list-item">
              <span>Second item</span>
              <div>
                <span className="badge bg-primary">?</span>
                <button className="delete-btn">
                  <i className="bi bi-x-circle-fill"></i>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="input-group add-input">
        <input type="text" className="form-control" placeholder="Item" />
        <input type="text" className="form-control" placeholder="Cost" />
        <button className="btn btn-primary add-btn">+</button>
      </div>
    </div>
  );
}

export default ExpensesList;
