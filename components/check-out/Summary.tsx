"use client";
import { IProduct } from "@/interface/IProduct";
import cookie from "@boiseitguru/cookie-cutter";
import { useEffect } from "react";
import Link from "next/link";

export default function Summary() {
  const prods = cookie.get("products");
  let listOfProds;
  let total = 0.0;

  if (prods != undefined) {
    listOfProds = prods;
    JSON.parse(listOfProds).data.map((item: IProduct) => {
      total += parseFloat(item.price) * (item.amount || 1);
    });
  }

  useEffect(() => {}, [total]);

  return (
    <main className="m-3 border rounded-md p-3 w-2/6 h-full">
      <h1 className="text-3xl my-3 font-semibold">💳 Zona de pago</h1>
      {total > 0 ? (
        <p className="font-light text-lg">Total: $ {total}</p>
      ) : (
        <h1>Agrega productos</h1>
      )}
      <Link href="/cart/method">
        <button className="bg-lime-600 rounded-md px-2 py-1 text-slate-50 mr-5 w-full my-3">
          Pagar
        </button>
      </Link>
    </main>
  );
}
