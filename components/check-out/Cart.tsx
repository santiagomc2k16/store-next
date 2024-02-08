import { IListOfProducts, IProduct } from "@/interface/IProduct";
import LongCard from "./LongCard";
import { cookies } from "next/headers";
interface Props {
  listOfProd: IListOfProducts;
}

export default function Cart(props: Props) {
  //const { listOfProd } = props;

  const cookieStore = cookies();
  const prods = cookieStore.get("products")?.value;

  return (
    <main className="m-3 border rounded-md p-3 w-4/6">
      <h1 className="text-3xl my-3 font-semibold">🛒 Tú carrito</h1>
      {prods != undefined ? (
        JSON.parse(prods).data.map((item: IProduct) => {
          return <LongCard key={item.id.valueOf()} product={item} />;
        })
      ) : (
        <h1>No tienes productos en el carrito</h1>
      )}
    </main>
  );
}
