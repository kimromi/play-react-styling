module.exports = ({ config }) => {
  // TypeScript
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'ts-loader',
  });

  return config
}
