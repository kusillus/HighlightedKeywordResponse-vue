<template>
  <div class="container-blocks">
    <div 
      class="pill" v-for="(el, idx) in blocks" :key="idx">
      <span class="text" @click="searchKeyword(el.url)">{{el.name}}</span>
      <span class="close">X</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
export default {
  data () {
    return {
      // urlHighLight: './public/json/highLighted.json',
      blocks: [
        { id: 1, name: 'Exploracion minera', url: './public/json/highLighted_k_one.json'},
        { id: 2, name: 'La Libertad', url: './public/json/highLighted_k_two.json'},
        { id: 3, name: 'Contratos y Concesiones Mineras', url: './public/json/highLighted_k_tree.json'}
      ]
    }
  },
  methods: {
    searchKeyword: function (url) {
      let vm = this
      //TODO: aqui consultamos el servicio el cual nos responde un texto resaltado.
      axios.get(url)
      .then(function (response) {
        let res = response.data
        let highLighted = res.detail.highLightText
        vm.updateShowLoader(true)
        vm.updateShowEditable(false)
        vm.showHighLighted(highLighted)
      }) 
    },
    updateShowEditable: function (value) {
      this.$store.commit('setShowEditable', value)
    },
    updateShowLoader: function (value) {
      this.$store.commit('setShowLoader', value)
    },
    showHighLighted: _.debounce(function (value) {
      this.$store.commit("setHighLigthText", value)
      this.$store.commit("setShowHighLitgh", true)
      this.updateShowLoader(false)
    }, 1000)
  }

}
</script>

<style lang="scss">
  .container-blocks {
    display: flex;
    // background-color: skyblue;
    flex-flow: row wrap;
  }
  .pill{
    background-color: skyblue;
    padding: .2rem .1rem .2rem 1rem;
    border-radius: 1rem;
    margin-right: .3rem;
    .text{
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
    .close{
      background-color: white;
      color: skyblue;
      font-weight: bold;
      border-radius: 1rem;
      padding: 0.12rem .5rem 0.12rem .5rem;
      margin-left: 1rem;
    }
  }
</style>
