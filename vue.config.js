module.exports = {
  publicPath: './',
  assetsDir: 'static',
  outputDir: 'dist',
  // assetsPublicPath: './',
  devServer: {
    port: 8080,
    host: '192.168.2.4',
  },

  configureWebpack: {
    resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      ],
    },
  },
}
