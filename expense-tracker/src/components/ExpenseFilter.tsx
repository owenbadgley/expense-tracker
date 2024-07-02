interface Props {
  filter: (filterCategory: string) => void;
}

const ExpenseFilter = ({ filter }: Props) => {
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Sort Table</label>
        <select
          id="category2"
          name="category"
          className="form-control"
          onChange={() => {
            var e = document.getElementById("category2") as HTMLSelectElement;
            var opt = e.options[e.selectedIndex];
            var CurValue = opt.value;
            filter(CurValue);
          }}
        >
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="gas">Gas</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
