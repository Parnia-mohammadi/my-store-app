import Link from "next/link";

const products = [
  { id: "p1", name: "book" },
  { id: "p2", name: "cloths" },
  { id: "p3", name: "mobile" },
];

function ProductsPage() {
  return (
    <div className="flex flex-col">
      {products.map((p) => (
        <div key={p.id}>
          <Link href={`/products/${p.id}`}>{p.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
