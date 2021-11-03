module.exports = api => {
  process.env.NODE_ENV === "dev" ? api.cache(false) : api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: 'defaults',
      },
    ],
  ];
  const plugins = [
    '@babel/plugin-transform-runtime'
  ];
  return {
    presets,
    plugins,
  };
};
