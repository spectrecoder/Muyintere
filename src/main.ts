/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import 'floating-vue/dist/style.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Composables
import { createApp } from 'vue'
import './index.css'

// Add the icons to the library
library.add(fas, fab)

// Create Vue app instance

// Register the FontAwesomeIcon component globally

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

registerPlugins(app)
app.mount('#app')

