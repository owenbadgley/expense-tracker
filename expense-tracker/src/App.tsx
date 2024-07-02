import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [purchaseList, setPurchaseList] = useState([
    { description: "exxon", amount: 43, category: "gas" },
    { description: "mcdonalds", amount: 9, category: "food" },
  ]);

  const handleNewPurchase = (purchase: {
    description: string;
    amount: number;
    category: string;
  }) => {
    setPurchaseList([
      ...purchaseList,
      {
        description: purchase.description,
        amount: purchase.amount,
        category: purchase.category,
      },
    ]);
  };

  const handleRemovePurchase = (description: string) => {
    setPurchaseList(
      purchaseList.filter((purchase) => {
        return purchase.description !== description;
      })
    );
  };

  return (
    <div>
      <Form></Form>
      <Table purchaseList={purchaseList}></Table>
    </div>
  );
}

export default App;
