import App from '@/ui/App.vue'
import { router } from '@/ui/router'
import { createVuetify } from 'vuetify'
import { createApp } from 'vue'

const vuetify = createVuetify()
createApp(App).use(router).use(vuetify).mount('#app')
