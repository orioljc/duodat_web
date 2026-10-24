const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Import the clean-webpack-plugin
const Dotenv = require('dotenv-webpack');
const fs = require('fs');
const yaml = require('js-yaml');
const TerserPlugin = require('terser-webpack-plugin'); // for minification
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const website_var = process.env.SITE || 'duodat.com';

// Load and parse the YAML config files
function loadYamlConfig(path) {
  try {
    const fileContents = fs.readFileSync(path, 'utf8');
    return yaml.load(fileContents);
  } catch (e) {
    console.error(e);
    return null;
  }
}

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';

    if(isDevelopment){
        config_type='dev'
    }else{
        config_type='prod'
    }
    config_path='build_params/'+config_type+'.yml'
    config_path_ga='build_params/ga.yml'
    config_path_gtm='build_params/gtm.yml'
    const config = loadYamlConfig(config_path);
    const config_ga = loadYamlConfig(config_path_ga);
    const config_gtm = loadYamlConfig(config_path_gtm);

    return {
        mode: isDevelopment ? 'development' : 'production',
        entry: {
            upload: path.resolve(__dirname, 'src', 'upload.js'),
            sliderInit: path.resolve(__dirname, 'src/assets/js', 'slider-init.js'),
            sliderInitProductDetail: path.resolve(__dirname, 'src/assets/js', 'slider-init-product-detail.js'),
        },
        output: {
            path: path.resolve(__dirname, `output_${website_var}`),
            filename: '[name].bundle.js'
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                }
            ]
        },
        plugins: [
            // new BundleAnalyzerPlugin(),
            new CleanWebpackPlugin(), // Add the CleanWebpackPlugin to clean the output folder
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html'),
                filename: 'index.html',
                chunks: ['sliderInit'], // Link with 'sliderInit' bundle
                // Pass site-specific data to the template
                templateParameters: {
                    website: website_var,
                    gsTrackingId: config_ga[website_var],
                    gtmTrackingId: config_gtm[website_var],
                    linkToBuyGeneric: config['link_stripe_generic'],
                    linkToBuyChristmas: config['link_stripe_christmas'],
                    linkToBuyBirthday: config['link_stripe_birthday'],
                    linkToBuyGraduation: config['link_stripe_graduation']
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'thank-you.html'),
                filename: 'thank-you.html',
                chunks: ['sliderInit'], // Link with 'sliderInit' bundle
                // Pass site-specific data to the template
                templateParameters: {
                    website: website_var,
                    gsTrackingId: config_ga[website_var],
                    gtmTrackingId: config_gtm[website_var],
                    linkToBuyGeneric: config['link_stripe_generic'],
                    linkToBuyChristmas: config['link_stripe_christmas'],
                    linkToBuyBirthday: config['link_stripe_birthday'],
                    linkToBuyGraduation: config['link_stripe_graduation']
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'upload.html'),
                filename: 'upload.html',
                chunks: ['upload'], // Link with 'upload' bundle
                // Pass site-specific data to the template
                templateParameters: {
                    website: website_var
                },
                inject: false // Add this line to disable automatic script injection
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'contact.html'),
                chunks: [],
                // Pass site-specific data to the template
                templateParameters: {
                    website: website_var
                },
                filename: 'contact.html'
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', '60th-birthday-gift.html'),
                filename: '60th-birthday-gift.html',
                chunks: ['sliderInitProductDetail'], // Link with 'sliderInitProductDetail' bundle
                // Pass site-specific data to the template
                templateParameters: {
                    website: website_var,
                    gsTrackingId: config_ga[website_var],
                    gtmTrackingId: config_gtm[website_var],
                    linkToBuyGeneric: config['link_stripe_generic'],
                    linkToBuyChristmas: config['link_stripe_christmas'],
                    linkToBuyBirthday: config['link_stripe_birthday'],
                    linkToBuyGraduation: config['link_stripe_graduation']
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', '50th-birthday-gift.html'),
                filename: '50th-birthday-gift.html',
                chunks: ['sliderInitProductDetail'], // Link with 'sliderInitProductDetail' bundle
                // Pass site-specific data to the template
                templateParameters: {
                    website: website_var,
                    gsTrackingId: config_ga[website_var],
                    gtmTrackingId: config_gtm[website_var],
                    linkToBuyGeneric: config['link_stripe_generic'],
                    linkToBuyChristmas: config['link_stripe_christmas'],
                    linkToBuyBirthday: config['link_stripe_birthday'],
                    linkToBuyGraduation: config['link_stripe_graduation']
                }
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src', 'assets'),
                        to: 'assets'
                    },
                    {
                        from: path.resolve(__dirname, 'src', 'vendor'),
                        to: 'vendor'
                    },
                    {
                        from: path.resolve(__dirname, 'src', 'includes'),
                        to: 'includes'
                    },
                ]
            }),

            // new Dotenv({
            //     path: isDevelopment ? './.env.development' : './.env.production',
            // }),

            new webpack.DefinePlugin({
                //'LAMBDA_URL': JSON.stringify(isDevelopment ? 'https://duodat.com/api/upload-images-localhost-oriol' : 'https://duodat.com/api/upload-images')
                'LAMBDA_URL': JSON.stringify('https://'+website_var+config['upload_images_api_endpoint']),
            })
        ],
        devServer: {
            static: {
              directory: path.join(__dirname, 'dist'),
            },
            hot: true,
        },
        // minification
        optimization: {
            minimize: true, // Ensures minification is enabled
            minimizer: [new TerserPlugin({
                // TerserPlugin options here
                // Example: terserOptions: { /* ... */ }
            })],
        },
    };
};
