# Portafolio · Kyle Navarro

Portafolio personal estático: HTML, CSS y JavaScript puro, sin frameworks ni paso de compilación. Bilingüe (español / inglés) y con tema claro / oscuro.

## Ver en local

Abre `index.html` en el navegador, o sirve la carpeta:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Estructura

```
index.html            Página completa (íconos SVG incluidos al inicio del body)
css/styles.css        Estilos: colores (claro y oscuro) arriba, luego cada sección
js/main.js            Idioma ES/EN, tema, revelado de proyectos, índice y blog
js/blog-posts.js      Lista de entradas del blog
blog/plantilla.html   Plantilla para escribir una entrada
img/kyle-navarro.png  Foto del hero
img/proyectos/        Capturas de cada web (WebP) e imagen de AgentPrice
files/                CV en PDF y su fuente HTML
fonts/                Tipografía Hack (licencia en fonts/LICENSE.md)
```

## CV

`files/CV-Kyle-Navarro.pdf` es el CV en inglés, formato ATS (una columna, texto seleccionable, Arial). El botón "Descargar CV" apunta ahí. Su fuente editable es `files/cv-fuente.html`: si lo cambias, ábrelo en Chrome, Imprimir → Guardar como PDF, tamaño Carta, sin encabezados ni pies de página.

## Cómo editar

- **Textos en español:** directamente en `index.html`.
- **Textos en inglés:** en `js/main.js`, en el objeto `EN`. Cada texto tiene una clave (`data-i18n="..."` en el HTML) y su traducción con la misma clave.
- **Agregar un proyecto:** copia un bloque `<li class="project">` en `index.html`, cambia enlaces, captura, descripción y tecnologías, y agrega su descripción en inglés en `EN` con una clave nueva (por ejemplo `work.miproyecto`).
- **Capturas de proyectos:** imágenes WebP de 1280×800 (misma proporción 16:10 del contenedor) en `img/proyectos/`.

## Blog

1. Copia `blog/plantilla.html` con un nombre nuevo, por ejemplo `blog/mi-primera-entrada.html`, y escribe el contenido.
2. En `js/blog-posts.js` agrega la entrada con el mismo `slug`:

```js
window.BLOG_POSTS = [
  {
    slug: 'mi-primera-entrada',
    date: '2026-11-05',
    title:   { es: 'Mi primera entrada', en: 'My first post' },
    excerpt: { es: 'Una línea sobre de qué trata.', en: 'One line about what it covers.' }
  }
];
```

Mientras la lista esté vacía, la sección muestra "Todavía no hay entradas".

## Publicar

Es una carpeta estática: funciona en GitHub Pages, Netlify o Cloudflare tal cual. La carpeta `.impeccable/` y `PRODUCT.md` son notas de diseño y no hace falta subirlas.
