/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        tabWidth: 4,
        semi: false,
        singleQuote: true,
        bracketSameLine: true,
      },
    },
  ],
};
