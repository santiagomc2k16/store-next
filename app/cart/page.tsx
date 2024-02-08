import CartComp from "@/components/check-out/Cart";
import Summary from "@/components/check-out/Summary";
import { IListOfProducts } from "@/interface/IProduct";
import { cookies } from "next/headers";

export default function Cart() {
  return (
    <div className="flex flex-row">
      <CartComp />
      <Summary />
    </div>
  );
}
