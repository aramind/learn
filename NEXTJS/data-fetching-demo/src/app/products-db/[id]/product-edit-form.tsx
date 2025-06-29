"use client";

import { editProduct, FormState } from "@/actions/products";
import { useActionState } from "react";
import { Product } from "../page";

export default function EditProductForm({ product }: { product: Product }) {
  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    initialState
  );

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded bg-white"
            name="title"
            defaultValue={product.title}
          ></input>
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Price
          <input
            type="text"
            className="block w-full p-2 text-black border rounded bg-white"
            name="price"
            defaultValue={product.price}
          ></input>
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Description
          <textarea
            className="block w-full p-2 text-black border rounded bg-white"
            name="description"
            defaultValue={product.description ?? ""}
          ></textarea>
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      {/* <Submit /> */}
      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-50"
        disabled={isPending}
      >
        Submit
      </button>
    </form>
  );
}
