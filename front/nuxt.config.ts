import NuxtConfiguration from '@nuxt/config'

const environment = process.env.NODE_ENV
const envSet = require(`./env/env.${environment}.js`)

const config: NuxtConfiguration = {
  mode: 'universal',
  env: envSet,
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  babel: {
    presets({ isServer }) {
      return [
        [
          '@nuxt/babel-preset-app',
          {
            targets: isServer
              ? { node: 'current' }
              : { browsers: ['> 1% in KR'] }
          }
        ]
      ]
    },
    plugins: ['transform-decorators-legacy', 'transform-class-properties']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:8080/graphql'
      }
    },
    includeNodeModules: true
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

export default config
