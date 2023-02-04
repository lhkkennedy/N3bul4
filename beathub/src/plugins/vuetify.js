// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  colors: {
    background: 'transparent'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme
    }
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
})
