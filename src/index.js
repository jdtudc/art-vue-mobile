import Actionsheet from './components/actionsheet'
import AddrPicker from './components/addr-picker'
import Alert from './components/alert'
import Badge from './components/badge'
import Button from './components/button'
import Calendar from './components/calendar'
import Checkbox from './components/checkbox'
import Countdown from './components/countdown'
import DatePicker from './components/date-picker'
import Description from './components/description'
import Drawer from './components/drawer'
import FormItem from './components/form-item'
import Input from './components/input'
import IScroll from './components/iscroll'
import List from './components/list'
import Loading from './components/loading'
import Loadmore from './components/loadmore'
import LoadingBar from './components/loading-bar'
import Mask from './components/mask'
import Modal from './components/modal'
import Popup from './components/popup'
import Radio from './components/radio'
import Slider from './components/slider'
import Steps from './components/steps'
import Switch from './components/switch'
import Tabs from './components/tabs'
import Tag from './components/tag'
import Textarea from './components/textarea'
import Toast from './components/toast'
import Uploader from './components/uploader'

import transferdom from './directives/transfer-dom'

const components = {
  Actionsheet,
  AddrPicker,
  Alert,
  Badge,
  Button,
  Calendar,
  Checkbox,
  Countdown,
  DatePicker,
  Description,
  Drawer,
  FormItem,
  Input,
  IScroll,
  List: List.List,
  ListItem: List.ListItem,
  Loading,
  Loadmore,
  LoadingBar,
  Mask,
  Modal,
  Popup,
  Radio,
  Steps,
  Slider,
  Switch,
  Tabs: Tabs.Tabs,
  Tab: Tabs.Tab,
  Tag,
  Textarea,
  Toast,
  Uploader
}

const directives = {
  transferdom
}

const plugins = {

}

function install (Vue) {
  if (install.installed) return

  // register components
  for (var item in components) {
    if (components[item].name) {
      Vue.component(components[item].name, components[item])
    }
  }
  // register directives
  for (var directive in directives) {
    Vue.directive(directive, directives[directive])
  }
  // register plugins
  for (var plugin in plugins) {
    Vue.directive(directive, directives[directive])
    Vue.prototype[plugin] = plugins[plugin]
  }
  console.log('Components:')
  console.log(components)
  console.log('Directives:')
  console.log(directives)
  console.log('Plugins:')
  console.log(plugins)
}

/**
 * Global Install
 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign({ install: install }, components)
