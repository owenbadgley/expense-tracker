import Table from "react-bootstrap/Table";
import CloseButton from "react-bootstrap/CloseButton";

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
  let totalCost = 0;
  purchaseList.map((item) => (totalCost += item.amount));

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Sort Table</label>
        <select id="category" name="category" className="form-control">
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="gas">Gas</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
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
            <td>${totalCost}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CostTable;
