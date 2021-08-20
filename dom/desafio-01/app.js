new Vue({
  el: '#desafio',
  data: {
    nome: 'Gabriel',
    idade: 23,
    imagem: 'https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg',

  },
  methods: {
    triploIdade: function() {
      return this.idade * 3
    },
    numeroRandomico: function() {
      return Math.random(1)
    }
  }
})