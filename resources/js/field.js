Nova.booting((Vue, router, store) => {
  Vue.component('index-nova-inventory-field', require('./components/IndexField'))
  Vue.component('detail-nova-inventory-field', require('./components/DetailField'))
  Vue.component('form-nova-inventory-field', require('./components/FormField'))
})
