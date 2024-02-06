import CartComp from "@/components/check-out/Cart";
import productsList from "@/data/products.json";
import Summary from "@/components/check-out/Summary";

export default function Cart() {
  return (
    <div className="flex flex-row">
      <CartComp listOfProd={productsList} />
      <Summary listOfProd={productsList} />
    </div>
  );
}
