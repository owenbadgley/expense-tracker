import Table from "react-bootstrap/Table";
import CloseButton from "react-bootstrap/CloseButton";
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

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr key="heading">
            <th key="description">Description</th>
            <th key="amount">Amount</th>
            <th key="category">Category</th>
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
                  onClick={() => {
                    handleDelete(item.key);
                  }}
                ></CloseButton>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>
              $
              {purchaseList.length > 0
                ? purchaseList.map((item) => (totalCost += item.amount))
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
