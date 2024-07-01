import Table from "react-bootstrap/Table";
import CloseButton from "react-bootstrap/CloseButton";

interface Props {
  purchaseList: { description: string; amount: number; category: string }[];
}

const CostTable = ({ purchaseList }: Props) => {
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
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <CloseButton></CloseButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CostTable;
