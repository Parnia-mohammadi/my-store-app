import { products } from "@/data/products";
import Link from "next/link";

function ProductsPage() {
  return (
    <div className="flex flex-col gap-8">
      {products.map((p) => (
        <Link
          key={p.id}
          href={`/products/${p.id}`}
          className="border p-4 rounded-2xl"
        >
          <div className="font-medium">{p.name}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Price: ${p.price}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductsPage;
