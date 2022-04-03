import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ExpensesList.css";

function ExpensesList() {
  const dispatch = useDispatch();
  const expenseName = useSelector((state) => state.expenses.name);
  const expenseCost = useSelector((state) => state.expenses.cost);
  const expensesList = useSelector((state) => state.expenses);

  function addExpense(e) {
    e.preventDefault();
    const itemInput = document.querySelector("#itemInput").value;
    const costInput = document.querySelector("#costInput").value;
    const newExpense = { name: itemInput, cost: costInput };

    dispatch({
      type: "ADD_EXPENSE",
      payload: newExpense,
    });
    dispatch({
      type: "CALC_SPENT_VAL",
      payload: costInput,
    });

    console.log(expensesList);

    // const nums = [1, 2, 3, 5];
    // const mappedNums = nums.map((num) => num + " dogs");
    // console.log(mappedNums);
  }

  return (
    <div>
      <h2>Expenses</h2>
      {/* <div className="card">
        <ul className="list-group list-group-flush" id="expensesList">
          {expensesList.map((expense) => (
            <li className="list-group-item">
              <div className="list-item">
                <span>{expensesList.name}</span>
                <div>
                  <span className="badge bg-primary">{expensesList.cost}</span>
                  <button className="delete-btn">
                    <i className="bi bi-x-circle-fill"></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div> */}

      <div className="input-group add-input">
        <input
          type="text"
          className="form-control"
          id="itemInput"
          placeholder="Item"
        />
        <input
          type="number"
          className="form-control"
          id="costInput"
          placeholder="Cost"
        />
        <button className="btn btn-primary add-btn" onClick={addExpense}>
          +
        </button>
      </div>
    </div>
  );
}

export default ExpensesList;
