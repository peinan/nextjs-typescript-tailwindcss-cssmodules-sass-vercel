const withSass = require("@zeit/next-sass");
const tailwindCss = require("tailwindcss");

module.exports = withSass({
  // cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: "[local]___[hash:base64:5]",
  // },
  webpack(config) {
    const rules = [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [tailwindCss("./tailwind.config.js")],
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ['src/styles/']
              }
            }
          },
        ],
      },
    ];
    if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }

    return {
      ...config,
      module: { ...config.module, rules: [...config.module.rules, ...rules] },
    };
  },
});
