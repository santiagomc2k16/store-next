import { IListOfProducts } from "@/interface/IProduct";

interface Props {
  listOfProd: IListOfProducts;
}

export default function Summary(props: Props) {
  const { listOfProd } = props;

  return (
    <main className="m-3 border rounded-md p-3 w-2/6 h-full">
      <h1 className="text-3xl my-3 font-semibold">💳 Zona de pago</h1>
      <p className="font-light text-lg">Total: $ 2.99</p>
      <button className="bg-lime-600 rounded-md px-2 py-1 text-slate-50 mr-5 w-full my-3">
        Pagar
      </button>
      {listOfProd.data.map((item) => {
        return <h1 key={item.id.valueOf()}>{item.name}</h1>;
      })}
    </main>
  );
}
