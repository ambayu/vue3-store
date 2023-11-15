import { createApp } from 'vue'
//import store vuex
import store from './store'
// import './style.css'
import App from './App.vue'
const app = createApp(App)
import router from './router'
app.use(router)
app.use(store)

//define mixins for global function
app.mixin({

    methods: {

        //money thousands
        moneyFormat(number) {
            let val = (number / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

        },

        //calculate discount
        calculateDiscount(product) {
            return product.price - (product.price * (product.discount) / 100)
        }

    }
})

app.mount('#app')