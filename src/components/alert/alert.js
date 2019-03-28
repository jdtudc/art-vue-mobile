/**
 * @Author: Created By McChen
 * @Date: 2017/11/30
 * @Mail: mcchen.club@gmail.com
 * @Version: V1.0.0
 */

import Vue from 'vue'

import alert from './src/alert'

// 实例对象
let instance

let Alert = {
  create (properties) {
    if (!instance) {
      // 组件构造器
      const AlertConstructor = Vue.extend(alert)
      instance = new AlertConstructor()
      for (let key in properties) {
        instance.$props[key] = properties[key]
      }
      // 挂载实例
      instance.$mount()
      document.body.appendChild(instance.$el)
    }
  },
  show (config, cb) {
    instance.$data.show = true
    instance.$props.title = config.title
    instance.$props.content = config.content
    instance.$props.btnText = config.btnText || '我知道了'
    instance.$props.fn = cb || null
  }
}
// 默认先创建一个
Alert.create()

export default {
  show (config, cb) {
    Alert.show(config, cb)
  }
}
