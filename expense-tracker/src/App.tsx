import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [purchaseList, setPurchaseList] = useState([
    { key: 0, description: "example", amount: 0, category: "example" },
  ]);

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
      <Table
        handleDelete={handleRemovePurchase}
        purchaseList={purchaseList}
      ></Table>
    </div>
  );
}

export default App;
