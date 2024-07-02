import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(1, { message: "Description is required." }),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0, { message: "Price must be positive" }),
  category: z.string().max(15, { message: "Select a Category." }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  purchaseSubmit: (purchase: {
    key: number;
    description: string;
    amount: number;
    category: string;
  }) => void;
  latestKey: number;
}

const Form = ({ purchaseSubmit, latestKey }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) =>
    purchaseSubmit({
      key: latestKey + 1,
      description: data.description,
      amount: data.amount,
      category: data.category,
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="text"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          {...register("category")}
          id="category"
          name="category"
          className="form-control"
        >
          <option>Select a Category</option>
          <option value="food">Food</option>
          <option value="gas">Gas</option>
          <option value="entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default Form;
