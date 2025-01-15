"use client";

import { Category } from "@/types";
import { useState } from "react";

function CategoryItem ({
    categories,
    category,
   
}: {
    categories: Category[];
    category: Category;
    
}) {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => setExpanded((value) => !value);
 // Manejar la expansión de las subcategorias  a nivel apdre deberias estar ya que las subcategorias si estan por debajo de la categoria estan en el mismo array que la lista de categorias
    const hasSubCategories = categories.filter(({ parentId }) => parentId === category.id).length 


    return (
        <li key={category.id} className="ml-4">
            {hasSubCategories ? (
                <button className="text-white" type="button" onClick={handleClick}>
                    {expanded ? "-" : "+"} 
                </button>
            ) : null}
            {category.name}
            {expanded ? <ListOfCategories categories={categories} parentCategory={category.id}  />
            : null}
        </li>
    )
          
}


export default function ListOfCategories({
  categories,
  parentCategory = null,
}: {
  categories: Category[];
  parentCategory?: string | null;
}) {


  //  Filtrar subCategorias de las categorias
  const categoriesRender = categories.filter(({ parentId }) => {
    return parentCategory === parentId;
  });


 

  return (
    <ul>
        {categoriesRender.map((category) => (
            <CategoryItem 
            key={category.id}
            categories={categories}
            category={category}
        
            />
        ))}

    </ul>

  )
}
