const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // Режим сборки
  entry: {
    filename: path.resolve(__dirname,'./src/index.js')// Точка входа для сборки проекта
},
  output: {
    path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
    filename: '[name][contenthash].js', // Имя выходного файла сборки
    clean:true,    
  },
    devServer: {
        port: 9091,
        compress: true,
        hot: true,
    static: {
      directory: path.join(__dirname, 'dist'), // Каталог для статики
    }
  },
    module: {
    rules: [
      {
        test: /\.scss$/, // Регулярное выражение для обработки файлов с расширением .css
        use: ['style-loader', 'css-loader', 'sass-loader'], // Загрузчики, используемые для обработки CSS-файлов
      },
    ],
  },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Web Page',
          filename: 'index.html',
          template: 'src/index.html'
        }),
      ],
};