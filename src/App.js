import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import BudgetOverview from "./component/BudgetOverview";
import ExpensesList from "./component/ExpensesList";

function App() {
  return (
    <div className="App">
      <BudgetOverview />
      <ExpensesList />
    </div>
  );
}

export default App;
