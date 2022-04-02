import React, { useState } from "react";
import "./ExpensesList.css";

function ExpensesList(props) {
  const items = [];
  const costs = [];

  function createListLine(name, cost) {
    // Get title into string
    let listTemplate = `
       <li className="list-group-item">
            <div className="list-item">
              <span id="itemName">${name}</span>
              <div>
                <span className="badge bg-primary" id="itemCost">${cost}</span>
                <button className="delete-btn">
                  <i className="bi bi-x-circle-fill"></i>
                </button>
              </div>
            </div>
          </li>`;
    return listTemplate;
  }

  // Add new  expense input to list when + button is clicked
  function addExpense(event) {
    event.preventDefault();

    // Set expense (item) name to name  input
    let itemName = document.getElementById("itemName");
    let itemInput = document.getElementById("itemInput").value;
    itemName = itemInput;
    // Push item to array of items
    items.push(itemName);

    // Set item cost to cost input
    let itemCost = document.getElementById("itemCost");
    let costInput = document.getElementById("costInput").value;
    itemCost = costInput;
    // Push cost to array of costs
    items.push(itemCost);

    //  Append new expense to list
    let todoListLocal = document.querySelector("#expensesList");
    let newTodoItem = createListLine(itemName, itemCost);

    // Turn template HTML into DOM node
    let wrapper = document.createElement("ul");
    wrapper.innerHTML = newTodoItem;

    // Append new node to todo list
    let newListLineAsElement = wrapper.querySelector("li");
    todoListLocal.append(newListLineAsElement);
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
