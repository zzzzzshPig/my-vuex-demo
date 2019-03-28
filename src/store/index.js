import vue from 'vue'
import {Commit, initGetter} from "@/store/update";

export let _vm = {}
export let _options = {}

class Vuex {
  install(Vue, op) {
    Vue.mixin({
      beforeCreate() {
        this.$store = {}
        this.$store.state = _vm.$data
        this.$store.commit = Commit
        this.$store.getters = initGetter(_options.getters)
      }
    })
  }

  Store (op) {
    _options = op

    const app = new vue({
      data() {
        return _options.state
      },

      computed: _options.getters
    })

    _vm = app
  }
}

export default new Vuex
