module.exports = {
  purge: process.env.NODE_ENV === 'production' && {
    content: [
      './src/**/*.svelte',
      './src/**/*.html',
      './src/**/*.css',
      './index.html',
    ],
    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) => {
        const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g)
        const matchedTokens = []
        let match = regExp.exec(content)
        while (match) {
          if (match[0].startsWith('class:')) {
            matchedTokens.push(match[0].substring(6))
          } else {
            matchedTokens.push(match[0])
          }
          match = regExp.exec(content)
        }
        return matchedTokens
      },
    },
  },
  theme: {
    boxShadow: {
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 200, 0.25)',
    },
  },
  variants: {
    shadow: ['focus'],
  },
  plugins: [require('@tailwindcss/typography')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
