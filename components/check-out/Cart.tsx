import { IListOfProducts, IProduct } from "@/interface/IProduct";
import LongCard from "./LongCard";

interface Props {
  listOfProd: IListOfProducts;
}

export default function Cart(props: Props) {
  const { listOfProd } = props;

  return (
    <main className="m-3 border rounded-md p-3 w-4/6">
      <h1 className="text-3xl my-3 font-semibold">🛒 Tú carrito</h1>
      {listOfProd.data.map((item: IProduct) => {
        return <LongCard key={item.id.valueOf()} product={item} />;
      })}
    </main>
  );
}
