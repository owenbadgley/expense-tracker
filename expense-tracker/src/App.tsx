import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
function App() {
  const [purchaseList, setPurchaseList] = useState([
    { description: "tomato", amount: 3, category: "food" },
  ]);
  return (
    <div>
      <Form></Form>
      <Table purchaseList={purchaseList}></Table>
    </div>
  );
}

export default App;
