# Aplicación de Lista de Libros 📚

¡Hola, Gracias por tu visita!  
Este challenge lo realicé a modo de práctica y me encontré con un montón de desafíos divertidos y cosas nuevas que aprendí (como el evento de `storage`). No tuve suficiente tiempo para dedicarle todo el amor que se merece, por lo que el resultado es limitado.  

He dejado algunos comentarios en el código para explicar las decisiones tomadas y he intentado que sea lo más sencillo posible.  

¡Ojalá te diviertas viéndolo, tanto como yo me divertí haciéndolo!  

## 📌 Objetivo  
Desarrollar una pequeña aplicación web que permita a los usuarios ver un catálogo de libros y gestionar una lista de lectura de manera sencilla y agradable.  

## 📝 Contexto  
Somos un sello editorial de libros multinacional. Queremos ofrecer a nuestro público una forma de ver nuestro catálogo y guardar los libros que les interesen en una lista de lectura.  

### Consideraciones:  
- No sabemos si el framework utilizado será el definitivo, pero queremos reutilizar el máximo de código posible.  
- La aplicación debe ser fácil de usar y agradable a la vista.  
- La mayoría de nuestros usuarios (80%) acceden desde navegadores de escritorio.  
- Usamos el archivo `books.json` para los datos de los libros. Puedes añadir más libros si deseas, siempre que respetes la misma estructura.  

## 🎯 Requisitos  

### Funcionalidad  
1. **Visualización de Libros Disponibles**  
   - Mostrar una lista de libros disponibles que el usuario pueda revisar.  

2. **Creación de Lista de Lectura**  
   - Los usuarios deben poder añadir libros a su lista de lectura.  
   - La interfaz debe mostrar claramente qué libros están en la lista de lectura y cuáles no.  
   - Los libros deben poder moverse entre la lista de lectura y la lista de disponibles.  

3. **Filtrado por Género**  
   - Permitir a los usuarios filtrar los libros por género.  
   - Mostrar un contador con el número total de libros disponibles, los libros en la lista de lectura y los disponibles en el género seleccionado.  

4. **Sincronización de Estado**  
   - Mantener sincronizado el estado global entre la lista de disponibles y la lista de lectura.  

5. **Persistencia de Datos**  
   - Usar el almacenamiento local del navegador para guardar la lista de lectura.  
   - La lista debe mantenerse al recargar la página.  

6. **Sincronización entre Pestañas**  
   - Cambios realizados en una pestaña deben reflejarse en otra sin necesidad de un backend.  

7. **Despliegue**  
   - La aplicación debe estar desplegada en un servicio de hosting gratuito como [Netlify](https://www.netlify.com), [Vercel](https://vercel.com) o [Firebase](https://firebase.google.com).  

8. **Test**  
   - La aplicación debe incluir al menos un test. Implementa el test que consideres más importante para tu proyecto.  

## 🛠️ Consejos sobre el Código  

1. **Estructura del Código**  
   - Organiza el código para que sea fácil de leer y entender.  

2. **Semántica HTML**  
   - Asegúrate de usar HTML semántico y accesible.  

3. **Colaboración en Equipo**  
   - Prepara el proyecto pensando en que otros puedan trabajar en él en el futuro. Incluye scripts en el `package.json`, documentación mínima en el `README` y comentarios en el código si es necesario.  

4. **Formato del Código**  
   - Usa herramientas como [Prettier](https://prettier.io) para mantener un formato consistente.  

5. **Preparación para Producción**  
   - Optimiza las imágenes y minimiza el código para asegurar un buen rendimiento.  


¡Gracias por revisar este proyecto! Si tienes algún comentario o sugerencia, no dudes en abrir un issue. 🙌  
