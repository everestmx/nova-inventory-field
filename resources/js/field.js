Nova.booting((Vue, router, store) => {
  Vue.component('index-inventory-field', require('./components/IndexField'))
  Vue.component('detail-inventory-field', require('./components/DetailField'))
  Vue.component('form-inventory-field', require('./components/FormField'))
})
