// import { products } from "@/data/products";
import { Product } from "@/context/CartContext";
import Link from "next/link";

export const metadata = {
  title: "My App Store | Products",
  description:
    "buy products like book, mouse and t-shirt from my app store by parnia mohammadi with lowest price",
};

// export const dynamic = "force-dynamic";

async function ProductsPage() {
  const data = await fetch("http://localhost:3000/api/productsList");
  const products = await data.json();
  return (
    <div className="flex flex-col gap-8">
      {products.map((p: Product) => (
        <Link
          key={p.id}
          href={`/products/${p.id}`}
          className="border p-4 rounded-2xl"
          prefetch={false}
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
