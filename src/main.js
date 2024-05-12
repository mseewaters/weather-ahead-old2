import { createApp } from 'vue'
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports'; 
Amplify.configure(awsconfig);

import App from './App.vue'
import router from './router';



createApp(App)
    .use(router)
    .mount('#app')
