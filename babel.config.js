// Fetch paths in tsconfig to register alias
// const tsconfig = require('./tsconfig.json');
// let rawAlias = tsconfig.compilerOptions.paths;
// let alias = {};

//  Loop paths
// for (let x in rawAlias) {
//   alias[x.replace('/*', '')] = rawAlias[x].map(p => p.replace('/*', ''));
// }
// TODO: Fix auto generate alias with test, ITS WORK CORRECT BUT IN TESTING HAS ERROR

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', 'jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@views': './src/views',
          '@components': './src/components',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@context': './src/context',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
