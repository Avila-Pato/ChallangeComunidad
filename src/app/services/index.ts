import { API_URL, SELLER_ID } from "@/config";
import { type Product } from "@/types";

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

