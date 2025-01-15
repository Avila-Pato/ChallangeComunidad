import { API_URL, SELLER_ID } from "@/config";
import { type Product, type Category} from "@/types";

export const getProducts =  (category?: string) => {
  const url = new URL(`${API_URL}/sites/MLA/search`);
  if (!SELLER_ID) throw new Error("SELLER_ID is not defined");

  url.searchParams.append("seller_id", SELLER_ID);
  
  if (category)  url.searchParams.append("category", category);

  console.log("Request URL:", url.toString()); 
  
  // Llamar a la API
  return fetch(url)
    .then((res) => res.json() as Promise<{ results: Product[]}>)
    .then((res) => {
      return res.results;
    });
  
};

export const getCategories = async (products: Product[]) => {
const ids = Array.from(new Set(products.map((product) => product.category_id)));

  const allProductCategories = await Promise.all(
    ids.map((id) =>
      fetch(`${API_URL}/categories/${id}`)
        .then((res) => res.json())
        .then((res) => res.path_from_root)
    )
  );
  const draft: Record<string, Category> = {}  
  
  allProductCategories.forEach((productCategories) => {
    productCategories.forEach((singleCategory: Category, index: number) => {
      const { id } = singleCategory;
      const parent: Category | undefined = productCategories[index + 1];
      const parentId: string | undefined = parent?.id;
      
      draft[id] = { ...singleCategory, parentId: parentId ?? null };
    })
  });
  return Object.values(draft);
}
  
  