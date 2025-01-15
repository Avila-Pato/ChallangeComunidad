import type { Metadata } from "next";
import "./globals.css";
import { getCategories, getProducts } from "./services";
import ListOfCategories from "./components/ListOfCategories";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//filtrar subCategorias de las categorias
// function ListOfCategories({ categories, parentCategory = null,}: {categories: Category[];
//   parentCategory?: string | null}){
//     const categoriesRender = categories.filter(({parentId}) => {
//       return parentCategory === parentId
//     })
//     return (
//       <ul className="pl-4">
//         {categoriesRender.map((category) => (
//           <li key={category.id}>

//           {category.name}
//           <ListOfCategories categories={categories} parentCategory={category.id} />
//           </li>
//         ))}
//       </ul>
//     )

// }

// Componente para listar solo categorías
// function ListCategories({ categories }: { categories: Category[] }) {
//   const rootCategories = categories.filter(({ parentId }) => !parentId);

//   return (
//     <ul>
//       {rootCategories.map((category) => (
//         <li key={category.id}>{category.name}</li>
//       ))}
//     </ul>
//   );
// }

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = await getProducts();
  const categories = await getCategories(products);
  console.log(categories); // Verificar si las categorías se cargan correctamente

  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr] px-4">
        <header className="text-xl font-bold leading-[3rem]">Migrado Libre</header>
        {/* Ajuste de diseño del Grid */}
        <div className="grid grid-cols-[300px,1fr] gap-10">
          {/* Categorías (a la izquierda) */}
          <aside className=" p-4">
            <ListOfCategories categories={categories} />
          </aside>
          {/* Contenido principal (a la derecha) */}
          <main className="py-8">
            {children}
          </main>
        </div>
        <footer className="text-center leading-[3rem] opacity-70">
          &copy; {new Date().getFullYear()} Dont panic
        </footer>
      </body>
    </html>
  );
}
