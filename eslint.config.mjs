import js from "@eslint/js"
import prettier from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"

export default [
  js.configs.recommended,
  prettier,
  prettierConfig,
  {
    rules: {
      "prettier/prettier": "error", // Mostra erro se Prettier não for seguido
      "no-console": "warn", // Exibe aviso para console.log()
      "no-unused-vars": "warn" // Exibe aviso para variáveis não usadas
    }
  }
]
