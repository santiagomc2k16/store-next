import { IProduct } from "@/interface/IProduct";
import LongCard from "./LongCard";
import { cookies } from "next/headers";

export default function Cart() {
  const cookieStore = cookies();
  const prods = cookieStore.get("products")?.value;
  console.log(prods);

  return (
    <main className="m-3 border rounded-md p-3 w-4/6">
      <h1 className="text-3xl my-3 font-semibold">🛒 Tú carrito</h1>
      {prods != undefined && JSON.parse(prods).data.length > 0 ? (
        JSON.parse(prods).data.map((item: IProduct) => {
          return <LongCard key={item.id.valueOf()} product={item} />;
        })
      ) : (
        <h1>No tienes productos en el carrito</h1>
      )}
    </main>
  );
}
