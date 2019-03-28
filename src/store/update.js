import {_options, _vm} from "@/store/index";

export function Commit(name, val) {
  _options.mutations[name](_options.state, val)
}

export function initGetter(getters) {
  let res = {}

  for (let k in getters) {
    res[k] = _vm[k]

    let des = Object.getOwnPropertyDescriptor(_vm, k)

    if (des) {
      Object.defineProperty(res, k, des)
    }
  }
  res._computedWatchers = _vm._computedWatchers

  return res
}

