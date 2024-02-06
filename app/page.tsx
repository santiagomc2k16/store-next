import Image from "next/image";
import Card from "@/components/products/Card";

export default function Home() {
  return (
    <>
      <Card
        name="iPhone 13"
        price="199.99"
        description="The old iphone"
        imgUrl="https://tiendasishop.com/media/catalog/product/m/l/mlq73lz_a_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
      />
    </>
  );
}
