// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: true, // Esto equivale a usar --host
    port: 4321, // (Opcional) Puedes fijar el puerto aquí
  },
});
