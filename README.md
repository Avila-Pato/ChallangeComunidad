# Ejercicio de Entrevista: Migrado Libre 🌐

## 🛍️ Contexto  
Don Miguel lleva 10 años vendiendo en Mercado Libre, pero tiene un problema: padece de **xantofobia** (miedo al color amarillo). Esto le causa un gran estrés al navegar por la web de Mercado Libre.  

Su hijo Ángel, que es programador, descubrió que Mercado Libre tiene una API abierta que permite buscar productos utilizando ciertos parámetros. Propuso crear una web personalizada para que su padre pueda gestionar sus productos sin entrar a la página oficial de Mercado Libre.  

Ángel, que está iniciando en el mundo del frontend, escuchó que **Next.js**, **TypeScript** y **Tailwind CSS** son herramientas excelentes para este propósito y dejó este proyecto preparado para que podamos desarrollarlo.  

## 📚 Recursos  
- El **Seller ID** de la tienda de Miguel es `179571326`.  
- La API de Mercado Libre tiene un endpoint para buscar productos de un vendedor específico:  

- Este endpoint devuelve una respuesta en formato JSON que incluye los productos del vendedor.  
- Puedes encontrar más información en la [documentación de la API de Mercado Libre](https://developers.mercadolibre.com.ar).  

## 📝 Requerimientos  

1. **Página Principal (`/`)**  
 - Mostrar un listado de todos los productos de Miguel en forma de grilla.  

2. **Página por Categoría (`/[category_id]`)**  
 - Mostrar un listado de productos correspondientes a la categoría seleccionada.  

3. **Menú de Categorías**  
 - Mostrar un menú a la izquierda con las categorías disponibles.  
 - Las categorías deben visualizarse en forma de árbol: si una categoría tiene subcategorías, estas deben mostrarse como un submenú.  
 - Las categorías deben iniciar contraídas.  
 - Al hacer clic en un botón de `-` o `+`, las categorías deben expandirse o contraerse individualmente.  

4. **Estado Persistente**  
 - Las categorías deben mantener su estado de expansión o contracción al navegar entre rutas.  

5. **Navegación**  
 - Al hacer clic en una categoría, se debe navegar a la ruta `/[category_id]` correspondiente.  
 - Al hacer clic en un producto, se debe redirigir al enlace del producto en la web oficial de Mercado Libre.  

## 🚀 Tecnologías Sugeridas  
- **Next.js**: Framework de React para desarrollo web con SSR y generación de sitios estáticos.  
- **TypeScript**: Superset de JavaScript que agrega tipado estático.  
- **Tailwind CSS**: Framework CSS para diseñar interfaces modernas y responsivas.

- ## Referencia
 ![Screenshot_15-1-2025_143444_localhost](https://github.com/user-attachments/assets/cd584255-24f4-470a-b8ec-d72c357c0a6e)


---

¡Espero que disfrutes resolviendo este ejercicio y aprendiendo en el proceso! Si tienes alguna duda o sugerencia, no dudes en dejar un comentario. 💻✨  
