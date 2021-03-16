module.exports = {
  presets: [
    ['next/babel'],
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
  plugins: [['babel-plugin-macros']],
}
