<template>
  <div style="margin-top:2rem;">
    <div v-if="showEditable">
      <span>Preciona "Esc" para guardar.</span>
    </div>
    <div v-if="!showEditable">
      <div v-if="!showHighLitgh" style="position: relative;">
        <loader v-if="showLoader"></loader>
        <span @dblclick="editable()" v-html="originalText"></span>
      </div>
      <div v-else style="position: relative;">
        <loader v-if="showLoader"></loader>
        <span @dblclick="editable()" v-html="highLigthText"></span>
      </div>
    </div>
    <div v-else>
      <div>
        <textarea @keyup.esc="exitEdit()" class="input-style" type="text" v-model="textEditable"></textarea>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import loader from './cLoader.vue'
export default {
  data () {
    return {
      // showLoader: true,
      urlSaveService: 'urlServiceSave',
      textEditable: '',
      // showEditable: false
      }
  },
  mounted: function () {
    this.loadData()
  },
  computed: {
    showLoader: function () {
      return this.$store.getters.loadShowLoader
    },
    showEditable: function () {
      return this.$store.getters.loadShowEditable
    },
    originalText: function () {
      return this.$store.getters.loadOriginalText
    },
    showHighLitgh: function () {
      return this.$store.getters.loadShowHighLitgh
    },
    highLigthText: function () {
      return this.$store.getters.loadHighLigthText
    }
  },
  methods: {
    exitEdit() {
      //TODO: validar que el texto haya cambiado para guardar en el servicio.
      if (this.originalText == this.textEditable) {
        console.log('equals')
        this.updateShowEditable(false)
      } else {
        console.log('different')
        this.updateShowEditable(false)
        this.updateData()
      }
      this.$store.commit("setShowHighLitgh", false)
    },
    updateData: function () {
      //TODO: aqui es donde consume el servicio y se guarda
      let vm = this
      let aux = {
        "oldText": vm.originalText,
        "newText": vm.textEditable
      }
      axios.post(vm.urlSaveService, { "obj": [aux]})
        .then(function (response) {
          let res =  response.data
          //TODO: si el response trae TRUE actualizamos el texto que se muestra
          if(res.save == true) {
            vm.updateText(vm.textEditable)
          }
          console.log(response)
        })
        .catch(function(error) {
          console.log('debes integrar tu servicio para que funcione')
          console.log('en teoria: actualizo la data que he editado y luego cuando seleccionas un keyword buscara en el texto ya actualizado. ahora como esta con data estatica no funciona.')
          //TODO: este es un ejemplo si es que funcionara correctamente.
          vm.updateText(vm.textEditable)
        })
    },
    updateShowEditable(value) {
      this.$store.commit('setShowEditable', value)
    },
    updateText: function (text) {
      this.$store.commit('setOriginalText', text)
    },
    editable: function () {
      this.updateShowEditable(true)
      this.loadData()
    },
    loadData: function () {
      this.textEditable = this.originalText
      // console.log(el.scrollHeight)
    }
  },
  components: {
    loader
  }
}
</script>

<style lang="scss">
  em{
    background-color: yellow;
  }
  .input-style {
    width: 100%;
    height: 10rem;
    font-size: 16px;
    font-weight: 100;
    font-family: 'Avenir';
  }
</style>
