import Products from "@/app/components/Products";
import { getProducts } from "../services";


// esto cambiaria a un optional ? 
export default async function ProductsPage({ 
    params: {
      segments}}:{
     params: { segments?: string[]}}) {
    
    const category = segments?.[0];
    const products = await getProducts(category);

    return <Products products={products} />
}