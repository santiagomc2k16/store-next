import { IProduct } from "@/interface/IProduct";
import Image from "next/image";
import Amount from "./Amount";

interface Props {
  product: IProduct;
}

export default function LongCard(props: Props) {
  const { name, price, description, imgUrl, amount } = props.product;

  return (
    <div className="flex flex-row h-36 w-full rounded-md border-solid border outline-sky-100 p-2 items-center justify-between mb-2">
      <div className="left flex flex-row items-center">
        <Image
          width={150}
          height={150}
          className="h-32"
          src={imgUrl.valueOf()}
          alt="Purple iPhone 14"
        />
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">{name}</h1>
          <h2>$ {price.toString()}</h2>
          <p className="text-sm font-light">{description}</p>
        </div>
      </div>
      <div className="rigth flex items-center gap-5">
        <Amount amount={amount ? amount.valueOf() : 1} />
        <button className="bg-red-600 rounded-md px-2 py-1 text-slate-50 mr-5">
          Delete
        </button>
      </div>
    </div>
  );
}
