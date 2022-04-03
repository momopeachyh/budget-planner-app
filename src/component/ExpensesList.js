import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ExpensesList.css";

function ExpensesList() {
  const dispatch = useDispatch();
  const expenseName = useSelector((state) => state.expenses.name);
  const expenseCost = useSelector((state) => state.expenses.cost);
  const expensesList = useSelector((state) => state.expenses);

  // function createListLine() {
  //   // Get title into string
  //   let listTemplate = `
  //  <li className="list-group-item">
  //       <div className="list-item">
  //         <span id="itemName">${expenseName}</span>
  //         <div>
  //           <span className="badge bg-primary" id="itemCost">${expenseCost}</span>
  //           <button className="delete-btn">
  //             <i className="bi bi-x-circle-fill"></i>
  //           </button>
  //         </div>
  //       </div>
  //     </li>`;
  //   return listTemplate;
  // }

  // Add new  expense input to list when + button is clicked
  // function updateList() {
  //   const itemInput = document.querySelector("#itemInput").value;
  //   const costInput = document.querySelector("#costInput").value;

  //   // Set expense (item) name to name  input
  //   let itemName = document.getElementById("itemName");
  //   itemName = expenseName;
  //   console.log(expenseName);

  //   // Set item cost to cost input
  //   let itemCost = document.getElementById("itemCost");
  //   itemCost = expenseCost;

  //   //  Append new expense to list
  //   let todoListLocal = document.querySelector("#expensesList");
  //   let newTodoItem = createListLine(itemName, itemCost);

  //   // Turn template HTML into DOM node
  //   let wrapper = document.createElement("ul");
  //   wrapper.innerHTML = newTodoItem;

  //   // Append new node to todo list
  //   let newListLineAsElement = wrapper.querySelector("li");
  //   todoListLocal.append(newListLineAsElement);
  // }

  function addExpense(e) {
    e.preventDefault();
    const itemInput = document.querySelector("#itemInput").value;
    const costInput = document.querySelector("#costInput").value;
    const newExpense = { name: itemInput, cost: costInput };
    dispatch({
      type: "ADD_EXPENSE",
      payload: newExpense,
    });

    const expensesListUi = document.getElementById("expensesList");
    // for (let index = 0; index < expensesList.length; index++) {
    // forecastData = response.data.list[index];
    //     expensesListUi.innerHTML += `
    //   <li className="list-group-item">
    //   <div className="list-item">
    //   <span id="itemName">${expenseName}</span>
    //   <div>
    //   <span className="badge bg-primary" id="itemCost">${expenseCost}</span>
    // <button className="delete-btn">
    // <i className="bi bi-x-circle-fill"></i>
    // </button>
    //   </div>
    // </div>
    //   </li>`;
    //   }
  }

  return (
    <div>
      <h2>Expenses</h2>

      <div className="card">
        <ul className="list-group list-group-flush" id="expensesList">
          {/* <li className="list-group-item">
            <div className="list-item">
              <span>First item</span>
              <div>
                <span className="badge bg-primary">?</span>
                <button className="delete-btn">
                  <i className="bi bi-x-circle-fill"></i>
                </button>
              </div>
            </div>
  </li> */}
          {/* <li className="list-group-item">
            <div className="list-item">
              <span>{expenseName}</span>
              <div>
                <span className="badge bg-primary">{expenseCost}</span>
                <button className="delete-btn">
                  <i className="bi bi-x-circle-fill"></i>
                </button>
              </div>
            </div>
          </li> */}
        </ul>
      </div>

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
