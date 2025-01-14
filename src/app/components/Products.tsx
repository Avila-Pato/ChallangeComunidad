
import { Product } from "@/types";
// Feth de la api
export default function Products({ products }: { products: Product[] }) {
  return (
    <ul className="grid grid-cols-4 gap-9">
      {products.map(
        ({ id, thumbnail, title, currency_id: currencyId, price }) => (
          <li key={id} className="  rounded">
            <img src={thumbnail} alt={thumbnail}  />
            <h3 className="mt-2 font-bold">{title}</h3>
            <strong>
              {price.toLocaleString("es-AR", {
                style: "currency",
                currency: currencyId,
              })}
            </strong>
          </li>
        )
      )}
    </ul>
  );
}




