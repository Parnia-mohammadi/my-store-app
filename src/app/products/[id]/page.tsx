function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>View product by ID : {params.id}</h1>
    </div>
  );
}

export default ProductPage;
