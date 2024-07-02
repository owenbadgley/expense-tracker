import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [purchaseList, setPurchaseList] = useState([
    { key: 0, description: "example", amount: 0, category: "example" },
  ]);
  const [filter, setFilter] = useState("all");

  const handleNewPurchase = (purchase: {
    key: number;
    description: string;
    amount: number;
    category: string;
  }) => {
    setPurchaseList([
      ...purchaseList,
      {
        key: purchase.key,
        description: purchase.description,
        amount: purchase.amount,
        category: purchase.category,
      },
    ]);
  };

  const updateFilter = (filter: string) => {
    setFilter(filter);
  };

  const generateFilteredList = () => {
    if (filter === "all") return purchaseList;
    return purchaseList.filter((purchase) => purchase.category === filter);
  };

  const handleRemovePurchase = (key: number) => {
    setPurchaseList(
      purchaseList.filter((purchase) => {
        return purchase.key !== key;
      })
    );
  };

  return (
    <div>
      <Form
        latestKey={
          purchaseList.length > 0
            ? purchaseList[purchaseList.length - 1].key
            : 0
        }
        purchaseSubmit={handleNewPurchase}
      ></Form>
      <ExpenseFilter filter={updateFilter}></ExpenseFilter>
      <Table
        handleDelete={handleRemovePurchase}
        purchaseList={generateFilteredList()}
      ></Table>
    </div>
  );
}

export default App;
