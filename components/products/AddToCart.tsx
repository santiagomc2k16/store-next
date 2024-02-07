"use client";
import { IProduct } from "@/interface/IProduct";
import { createProductsCookies } from "@/app/actions/createProducts";
import cookie from "@boiseitguru/cookie-cutter";

export default function AddToCart(props: { product: IProduct }) {
  function handleClick() {
    createProductsCookies(props.product);

    console.log(cookie.get("products"));
  }

  return (
    <button
      className="bg-lime-600 rounded-md p-1 text-slate-50"
      onClick={handleClick}
    >
      Add to cart
    </button>
  );
}
