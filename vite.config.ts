import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from "vite-plugin-dts"
import pkg from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "react-iconverse",
      fileName: (format, name) => `${name}.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(pkg.dependencies),
      output: [
        {
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          globals: {
            react: "React",
            "react-dom": "ReactDOM"
          },
        },
        {
          format: "umd",
          name: "react-iconverse",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },

      ]

    },
    sourcemap: true,
    emptyOutDir: true,
  }
})
