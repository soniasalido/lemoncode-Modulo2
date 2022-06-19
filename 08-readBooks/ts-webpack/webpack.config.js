const htmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  // Se establece la opción 'modo' en 'desarrollo' para habilitar los valores predeterminados para cada entorno.
  mode: 'development',
  // Cambiamos los puntos de entrada tratándolo en vez de como un array, como un objeto con su par: clave-valor
  // Defino un punto de entrada para la aplicación --> app
  // Defino un punto de entrada para el css --> appStyles
  entry: {
    app: "./src/index.ts",
    appStyles: "./src/mystyles.css"
  },
  // Definimos las Salidas que va a generar webpack.
  // Al hacer chunkhash genera un hash relacionado con el contenido del fichero, así tendremos un nombre único
  output: {
    filename: "[name].[chunkhash].js",
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        // Usamos el plugin: mini-css-extract-plugin para tener un ficher externo de css.
        // Previamente hay que instalarlo con npm install
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ],
  },
  plugins: [
    // Instanciamos el htmlWebPackPlugin
    new htmlWebPackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      scriptLoading: 'blocking',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
    })
  ],
  devServer: {
    compress: true,
    port: 9000,
  },
};