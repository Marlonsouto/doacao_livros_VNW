export default defineConfig({
  plugins: [react()],
  build: {
    assetsInclude: ['**/*.png'], // Garante que PNGs sejam incluídos
  },
});
