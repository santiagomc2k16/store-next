"use client";
import { useState, useEffect } from "react";
import "./Amount.css";
import cookie from "@boiseitguru/cookie-cutter";
import { modifyAmountCookies } from "@/app/actions/createProducts";

export default function Amount({ amount, id }: { amount: number; id: number }) {
  const [amountState, setAmount] = useState<number>(amount);

  useEffect(() => {
    modifyAmountCookies(id, amountState);
    cookie.set("amount", amountState.toString());
  }, [amountState]);

  function upperAmpunt() {
    setAmount(amountState + 1);
  }

  function lowerAmount() {
    setAmount(amountState - 1);
  }

  return (
    <div className="flex border rounded-md">
      <button className="border-r p-1" onClick={lowerAmount}>
        -
      </button>
      <input
        type="number"
        className={`w-10 remove-arrows text-center`}
        value={amountState}
      />
      <button className="border-l p-1" onClick={upperAmpunt}>
        +
      </button>
    </div>
  );
}
