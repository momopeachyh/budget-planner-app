import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ExpensesList.css";

function ExpensesList() {
  const dispatch = useDispatch();
  const expensesList = useSelector((state) => state.expenses);
  const expenseCount = useSelector((state) => state.expenseCount);
  const [searchTerm, setSearchTerm] = useState("");

  function addExpense(e) {
    e.preventDefault();
    const itemInput = document.querySelector("#itemInput").value;
    const costInput = document.querySelector("#costInput").value;
    const key = 100 + Number(expenseCount);
    const newExpense = {
      name: itemInput,
      cost: costInput,
      key: key,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: newExpense,
    });
    dispatch({
      type: "INC_SPENT_VAL",
      payload: costInput,
    });
  }

  function deleteExpense(key, cost) {
    dispatch({
      type: "DEC_SPENT_VAL",
      payload: cost,
    });
    dispatch({
      type: "DELETE_EXPENSE",
      payload: key,
    });
  }

  return (
    <div>
      <h2>Expenses</h2>
      <input
        type="text"
        className="form-control search-bar"
        id="searchInput"
        placeholder="Filter expenses"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <div className="card">
        <ul className="list-group list-group-flush" id="expensesList">
          {expensesList
            .filter((expense) => {
              if (searchTerm == "") {
                return expense;
              } else if (expense.name.includes(searchTerm.toLowerCase())) {
                return expense;
              }
            })
            .map((expense) => (
              <li className="list-group-item" key={expense.key}>
                <div className="list-item">
                  <span id="listItem">{expense.name}</span>
                  <div>
                    <span className="badge bg-primary">${expense.cost}</span>
                    <button
                      className="delete-btn"
                      id="deleteBtn"
                      onClick={() => deleteExpense(expense.key, expense.cost)}
                    >
                      <i className="bi bi-x-circle-fill"></i>
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <form>
        <div className="input-group add-input">
          <input
            type="text"
            className="form-control"
            id="itemInput"
            placeholder="Item"
            required
          />
          <input
            type="number"
            className="form-control"
            id="costInput"
            placeholder="Cost"
            required
          />
          <button
            type="submit"
            className="btn btn-primary add-btn"
            onClick={addExpense}
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExpensesList;
