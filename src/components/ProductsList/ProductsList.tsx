import { useEffect, useState } from "react";
import { getAllProcucts } from "../../services/requests"
import { ProductCard } from "./ProductCard/ProductCard"
import { IProducts } from "../../atoms/ProductsAtom";



export async function ProductsList() {

  const [productsList, setProductsList] = useState<IProducts[] | null>([]);

  useEffect(() => {
    async function fetchProducts() {
      const products = await getAllProcucts();
      setProductsList(products);
    }

    fetchProducts();
  }, []);


  return (
    <ul id="list" className="px-4 md:px-8 lg:px-4 xl:px-4 flex gap-5 overflow-x-auto  mx-auto">
        {productsList?.map((product) => <ProductCard key={product.id} product={product} />)}
    </ul>
  )
}