<template>
  <div class="artm-input" :class="[float && 'artm-input_float', inline && 'artm-input_inline', focus && 'artm-input_focus', hasClear && 'artm-input_hasClear', disabled && 'artm-input_disabled']">
    <div class="artm-input-label" :class="labelFloat && 'artm-input-label_float'" v-if="label" v-text="label"></div>
    <div class="artm-input-original">
      <input :type="type" :autofocus="autofocus" :disabled="disabled" :maxlength="maxlength" :name="name" :placeholder="placeholder" :readonly="readonly" @focus="handleFocus" @blur="handleBlur" @input="handleInput" :value="curVal"></input>
      <i class="icon-clear" @click="handleClear" v-if="hasClear && showClear"></i>
    </div>
    <slot></slot>
  </div>
</template>
<script>
	import calcTextareaHeight from '../../../utils/calcTextareaHeight'
	export default {
		name: 'artm-input',
		props: {
			value: [String, Number],
			// label 值
			label: String,
			// 浮动label
			float: {
				type: Boolean,
				default: false
			},
			// 是否单行
			inline: {
				type: Boolean,
				default: true
			},
			// 是否要清空按钮
			hasClear: {
				type: Boolean,
				default: true
			},
			// 尺寸设置
			autoSize: {
				type: [Boolean, Object],
				default: true
			},
			// input 属性
			type: {
				type: String,
        default: 'text'
      },
			autofocus: Boolean,
			disabled: Boolean,
			maxlength: Number,
			name: String,
			placeholder: String,
			readonly: Boolean,
		},
		data () {
			return {
				focus: this.autofocus || false,
				curVal: this.value || ''
			}
		},
		methods: {
			// 浮动侦测，判断 label 是否要收起
			floatDetective () {
				if (this.curVal.length > 0) {
					this.focus = true
				} else {
					this.focus = false
				}
			},
			handleBlur (event) {
				this.focus = false
				this.$emit('blur', event)
			},
			handleFocus (event) {
				this.focus = true
				this.$emit('focus', event)
			},
			handleInput (event) {
				this.curVal = event.target.value
        this.$emit('input', this.curVal)
			},
			handleClear () {
				this.curVal = ''
				this.focus = false
				this.$emit('on-clear', '')
			}
		},
		watch: {
			value (val) {
				this.curVal = val
				if (this.float) {
					this.floatDetective ()
				}
			}
		},
		computed: {
			showClear () {
				return this.focus && this.curVal.length > 0
			},
			labelFloat () {
				if (this.float && (this.focus || this.curVal.length > 0)) {
					return true
				} else {
					return false
				}
			},
		}
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/input";
</style>