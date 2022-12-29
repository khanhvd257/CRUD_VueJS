import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from "vue-axios";
import axios from "axios";
import Swal from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)
app.use(router)
app.use(Swal);
app.use(VueAxios, {$request: axios})
app.mount('#app')
