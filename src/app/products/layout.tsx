import { ReactNode } from "react";
import CategoriesPage from "./categories/page";

type ProductsLayoutProps = {
  children: ReactNode;
};

function ProductsLayout({ children }: ProductsLayoutProps) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-6">Our Products :</h2>
      {children}
    </section>
  );
}

export default ProductsLayout;
