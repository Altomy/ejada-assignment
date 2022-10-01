// Fetch paths in tsconfig to register alias
const tsconfig = require('./tsconfig.json');
let rawAlias = tsconfig.compilerOptions.paths;
let alias = {};

// Loop paths
for (let x in rawAlias) {
  alias[x.replace('/*', '')] = rawAlias[x].map(p => p.replace('/*', ''));
}

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', 'jsx', '.ts', '.tsx', '.json'],
        alias,
      },
    ],
  ],
};
