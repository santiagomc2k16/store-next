import Image from "next/image";

interface Props {
  name: String;
  price: String;
  description: String;
  imgUrl: String;
}

export default function Card(props: Props) {
  const { name, price, description, imgUrl } = props;

  return (
    <>
      <div className="flex flex-col w-1/6 rounded-md border-solid border outline-sky-100 p-2 m-3 min-w-60">
        <Image
          className="p-2 border-b"
          src={imgUrl.valueOf()}
          alt="Purple iPhone 14"
          width={700}
          height={700}
        />
        <div className="py-2.5">
          <h1 className="text-xl font-bold">{name}</h1>
          <h2>$ {price}</h2>
          <p className="text-sm font-light">{description}</p>
        </div>
        <button className="bg-lime-600 rounded-md p-1 text-slate-50">
          Add to cart
        </button>
      </div>
    </>
  );
}
