import { products } from "@/data/products";

function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product)
    return <div className="text-2xl">This product hasn't been found.</div>;

  return (
    <div className="flex flex-col gap-5 max-w-2xl mx-auto">
      <div className="border p-6 rounded-2xl flex gap-6">
        <div className="flex flex-col justify-between">
          <h1 className="text-xl font-bold text-nowrap">{product.name}</h1>
          <p className="text-lg mt-2">Price: {product.price} dollars</p>
        </div>
        <img
          src={product.url}
          alt={product.name}
          width="600px"
          height="300px"
          className="border rounded-xl"
        />
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-600 dark:bg-gray-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-gray-800 transition">
        افزودن به سبد خرید
      </button>
    </div>
  );
}

export default ProductPage;
