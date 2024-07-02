import Table from "react-bootstrap/Table";
import CloseButton from "react-bootstrap/CloseButton";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

interface Props {
  purchaseList: {
    key: number;
    description: string;
    amount: number;
    category: string;
  }[];
  handleDelete: (key: number) => void;
}

const CostTable = ({ purchaseList, handleDelete }: Props) => {
  let totalCost: number;
  const [filteredList, setFilteredList] = useState([...purchaseList]);

  const handleFilter = (filterCategory: string) => {
    if (filterCategory === "all") {
      setFilteredList([...purchaseList]);
    } else {
      setFilteredList(
        purchaseList.filter((purchase) => purchase.category !== filterCategory)
      );
    }
  };

  return (
    <div>
      <ExpenseFilter filter={handleFilter}></ExpenseFilter>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {purchaseList.map((item) => (
            <tr>
              <td>{item.description}</td>
              <td>${item.amount}</td>
              <td>{item.category}</td>
              <td>
                <CloseButton
                  onClick={() => handleDelete(item.key)}
                ></CloseButton>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>
              $
              {filteredList.length > 0
                ? filteredList.map((item) => (totalCost += item.amount))
                : 0}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CostTable;
