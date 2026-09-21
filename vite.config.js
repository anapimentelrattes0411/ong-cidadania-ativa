import { defineConfig } from 'vite'

export default defineConfig({
  root: 'html',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: 'html/index.html',
        cadastro: 'html/cadastro.html',
        projetos: 'html/projetos.html'
      }
    }
  }
})
