import productData from "@/data/products.json";
import Card from "@/components/products/Card";

export default function Home() {
  return (
    <div className="flex">
      {productData.data.map((item) => {
        return <Card key={item.id} product={item} />;
      })}
    </div>
  );
}
