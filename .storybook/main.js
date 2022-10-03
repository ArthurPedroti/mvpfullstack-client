module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
    "@chakra-ui/storybook-addon"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-webpack5"
  },
  features: {
    emotionAlias: false,
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  webpackFinal: (config) => {
	  config.resolve.modules.push(`${process.cwd()}/src`)
	  return config
	}
}
