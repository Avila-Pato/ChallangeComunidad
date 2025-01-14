import Products from "@/app/components/Products";
import { getProducts } from "../services";


export default async function CategoryPage({ params: { category } }: { params: { category: string } }) {


    const products = await getProducts(category);

    return <Products products={products} />
}