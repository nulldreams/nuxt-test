const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' },
      { src: 'https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js' },
      { src: 'https://unpkg.com/feather-icons/dist/feather.min.js' },
      { src: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js' },
      { src: 'https://cdn.jsdelivr.net/npm/sweetalert2' },
      { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBHJZhJ84nU8oCwVJu7YT9RbgNzh_shrJA&libraries=places' },
      { src: 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/style.css',
    '~/assets/css/aos/dist/aos.css',
    '~/assets/css/bootstrap-touch-slider/bootstrap-touch-slider.css',
    '~/assets/css/owl.carousel/dist/assets/owl.theme.green.css',    
    '~/assets/css/yourstyle.css',
    '~/assets/css/style.css',
    '~/assets/icones/icomoon/style.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [ '@nuxtjs/google-tag-manager', { id: 'GTM-N65BKX6' } ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
