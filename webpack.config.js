import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'main'),
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '', // Chemin public racine pour les ressources
        filename: 'bundle.js',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/img/[name][ext][query]'
                }
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/fonts/[name][ext][query]'
                }
            },
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'components')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader',
                options: {
                    presets: [
                        ["@babel/env", {
                            "targets": {
                                "browsers": "last 2 chrome versions"
                            }
                        }],
                        "@babel/preset-react"
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                include: [
                    path.resolve(__dirname, 'sass')
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.scss'],
    },
    devtool: 'source-map',
    devServer: {
        static: path.join(__dirname, 'dist'),
        inline: true,
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
    }
};
