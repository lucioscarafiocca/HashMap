function HashMap() {
  let load_factor = 0.75
  let modulo = 16

  const hash = (key) => {
    let hashCode = 0

    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % modulo
    }

    return hashCode
  }

  const set = (key, value) => {
    let capacity = array.length
    let result = capacity * load_factor
    let nodes = map.keys()
    if (nodes.length > result) {
      let values = map.entries()
      let length = array.length * 2
      array = []
      for (let i = 0; i < length; i++) {
        array.push({})
      }
      modulo = length
      values.forEach((element) => {
        map.set(element[0], element[1])
      })
    } else {
      const keys = hash(key)
      array[keys][key] = value
    }
  }
  const get = (key) => {
    const keys = hash(key)
    const result = array[keys][key]
    if (result !== undefined) {
      return result
    } else {
      return null
    }
  }
  const has = (key) => {
    const keys = hash(key)
    const result = array[keys][key]
    if (result !== undefined) {
      return true
    } else {
      return false
    }
  }
  const remove = (key) => {
    if (map.has(key)) {
      const keys = hash(key)
      const result = array[keys]
      delete result[key]
      return true
    } else {
      return false
    }
  }
  const length = () => {
    let result = 0
    for (let i = 0; i < array.length; i++) {
      let obj = array[i]
      let length = Object.keys(obj).length
      result += length
    }
    return result
  }

  const clear = () => {
    for (let i = 0; i < array.length; i++) {
      array[i] = {}
    }
  }
  const keys = () => {
    let result = []
    for (let i = 0; i < array.length; i++) {
      let obj = array[i]
      let child = Object.getOwnPropertyNames(obj)
      if (child == 0) {
      } else {
        for (let b = 0; b < child.length; b++) {
          result.push(child[b])
        }
      }
    }
    return result
  }
  const values = () => {
    let values = []
    let keys = map.keys()
    keys.forEach((element) => {
      let name = map.get(element)
      values.push(name)
    })
    return values
  }
  const entries = () => {
    let values = []
    let keys = map.keys()
    keys.forEach((element) => {
      let name = map.get(element)
      values.push([element, name])
    })
    return values
  }
  return { hash, set, get, has, remove, length, clear, keys, values, entries }
}

let array = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
