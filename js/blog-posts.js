/*
  Entradas del blog.

  Para publicar una entrada:
  1. Copia blog/plantilla.html, renómbrala (por ejemplo blog/mi-primera-entrada.html) y escribe el texto.
  2. Agrega un objeto a esta lista con el mismo "slug" (el nombre del archivo sin .html).
     La más reciente aparece primero, según "date" (AAAA-MM-DD).

  Ejemplo:
  {
    slug: 'mi-primera-entrada',
    date: '2026-11-05',
    title:   { es: 'Mi primera entrada', en: 'My first post' },
    excerpt: { es: 'Una línea sobre de qué trata.', en: 'One line about what it covers.' }
  }
*/
window.BLOG_POSTS = [
];
