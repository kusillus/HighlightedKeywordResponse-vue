<template>
  <div id="app">
    <blocks></blocks>
    <highlight></highlight>
  </div>
</template>

<script>
import blocks from './components/cBlocks.vue'
import highlight from './components/cHighlight.vue'
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      urlHighLight: './public/json/highLighted_original.json',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    this.loadData()
  },
  methods: {
    loadData: function () {
      let vm = this
      axios.get(this.urlHighLight)
        .then(function(response){
          let res = response.data
          let original = res.detail.originalText
          console.log(res.detail.originalText)
          vm.$store.commit('setOriginalText', original)
        })
    }
  },
  components: {
    blocks,
    highlight
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
