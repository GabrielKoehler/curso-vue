new Vue({
  el: '#desafio',
  data: {
    valor: ''
  },
  methods: {
    exibirAlerta() {
      alert("Clicado")
    },
    armazenaValorKeyup() {
      return this.valor = event.target.value
    },
    armazenaValorKeydown() {
      return this.valor = event.target.value
    }
  }
})