import { useForm } from "react-hook-form";

const onSubmit = () => console.log("Submitted");

const Form = () => {
  const { register, handleSubmit } = useForm<FormData>();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input id="amount" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          id="category"
          name="cars"
          className="form-control"
          aria-label="Default select example"
        >
          <option>Select a Category</option>
          <option value="groceries">Food</option>
          <option value="gas">Gas</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
