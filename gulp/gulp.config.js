export const srcDir = 'src';
export const buildDir = 'build';
const env = process.env.NODE_ENV;

const productionMode = 'production';

export const isProdMode = env === productionMode;

export const svgoPlugins = [
  {
    name: 'cleanupListOfValues',
    params: {floatPrecision: 0}
  },
  {
    name: 'removeAttrs',
    params: {attrs: 'style|data.*'}
  },
  {
    name: 'removeDimensions',
    active: true
  },
];

export const svgoPluginsSprite = [...svgoPlugins];

svgoPluginsSprite.push({
  name: 'removeAttributesBySelector',
  params: {
    selectors: [
      {selector: ':not([fill="none"])', attributes: ['fill']},
      {selector: '*', attributes: ['stroke'],}
    ]
  },
});

export const revManifest = {
  path: `${buildDir}/rev-manifest.json`,
  options: {
    base: `./${buildDir}`,
    merge: true
  }
};

export const browserSyncOptions = {
  server: {
    baseDir: "./build"
  },
  open: false,
  notify: false,
  cors: true
};

export const paths = {
  views: {
    src: `./${srcDir}/pages/*.pug`,
    dist: buildDir,
    watch: `./${srcDir}/pages/**/*.pug`
  },
  styles: {
    src: `./${srcDir}/styles/*.pcss`,
    dist: `./${buildDir}/styles/`,
    watch: `./${srcDir}/styles/**/*.pcss`
  },
  scripts: {
    src: `./${srcDir}/scripts/*.js`,
    dist: `./${buildDir}/scripts/`,
    watch: `./${srcDir}/scripts/**/*.js`
  },
  images: {
    src: [
      `./${srcDir}/images/**/*.{jpg,jpeg,png,gif,tiff,webp,svg}`,
      `!./${srcDir}/images/icons/*.svg`,
      `!./${srcDir}/images/favicon/*.{jpg,jpeg,png,gif,tiff}`
    ],
    dist: `./${buildDir}/images/`,
    watch: `./${srcDir}/images/**/*.{jpg,jpeg,png,gif,svg,tiff}`
  },
  sprite: {
    src: `./${srcDir}/images/icons/*.svg`,
    dist: `./${buildDir}/images/`,
    watch: `./${srcDir}/images/icons/*.svg`
  },
  fonts: {
    src: `./${srcDir}/fonts/**/*.{woff,woff2}`,
    dist: `./${buildDir}/fonts/`,
    watch: `./${srcDir}/fonts/**/*.{woff,woff2}`
  },
  favicon: {
    src: `./${srcDir}/images/favicon/*.{jpg,jpeg,png,gif}`,
    dist: `./${buildDir}/images/favicon/`,
  }
};
