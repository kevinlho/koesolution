// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      // Disable the import/no-unresolved rule for Nuxt aliases
      'import/no-unresolved': 'off',
      'vue/multi-word-component-names': 'off'
    }
  }
)
