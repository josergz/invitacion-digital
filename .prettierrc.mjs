/** @type {import("prettier").Config} */
export default {
  // 1. Los plugins deben ir en este orden exacto
  plugins: [
    'prettier-plugin-astro', 
    'prettier-plugin-tailwindcss'
  ],

  // 2. Configuración específica para archivos .astro
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],

  // 3. Tus preferencias de estilo (puedes cambiarlas a tu gusto)
  semi: true,            // Usar punto y coma
  singleQuote: true,     // Usar comillas simples
  tabWidth: 2,           // Tamaño de la sangría
  trailingComma: 'all',  // Coma al final en objetos/arrays
  printWidth: 80,        // Longitud máxima de línea
}