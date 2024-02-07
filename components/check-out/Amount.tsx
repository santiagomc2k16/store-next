"use client";
import { useState, useEffect } from "react";
import "./Amount.css";
import cookie from "@boiseitguru/cookie-cutter";

export default function Amount({ amount }: { amount: number }) {
  const [amountState, setAmount] = useState<number>(amount);

  useEffect(() => {
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
