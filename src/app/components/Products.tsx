import { Product } from "@/types";

// Fetch de la API
export default function Products({ products }: { products: Product[] }) {
  return (
    <ul className="grid grid-cols-4 gap-9">
      {products.map(
        ({ id, thumbnail, title, permalink, currency_id: currencyId, price }) => (
          <li key={id} className="rounded">
            <a 
              href={permalink}
              rel="noopener noreferrer"
              target="_blank"
              title={`Ir a la página de Mercado Libre para ver el producto en detalle: ${title}`}
              
            >
              <img src={thumbnail} alt={title}  />
              <h3 className="mt-2 font-bold">{title}</h3>
              <strong>
                {price.toLocaleString("es-AR", {
                  style: "currency",
                  currency: currencyId,
                })}
              </strong>
            </a>
          </li>
        )
      )}
    </ul>
  );
}
