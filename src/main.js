import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
/*
const instana = require('@instana/collector');

instana({
  agentHost: 'localhost', // Cambia esto a la dirección de tu agente Instana
  agentPort: 42699 // Cambia esto al puerto de tu servidor Instana
  // Otras configuraciones opcionales
});
*/
new Vue({
  render: h => h(App),
}).$mount('#app')
