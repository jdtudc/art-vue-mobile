/**
 * @Author: Created By McChen
 * @Date: 2019/02/15
 * @Mail: mcchen.club@gmail.com
 * @Version: V1.0.0
 */

/** ============================
 private
 ============================== */
function pageLockHandler (e) {
  e.preventDefault()
}

export const Screen = {
  version: '1.0.0',

  lock: function () {
    document.addEventListener('touchmove', pageLockHandler, { capture: false, passive: false })
  },

  unlock: function () {
    document.removeEventListener('touchmove', pageLockHandler, { capture: false })
  }
}
