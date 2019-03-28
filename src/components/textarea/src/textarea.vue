<template>
  <div class="artm-textarea" :class="[float && 'artm-textarea_float', inline && 'artm-textarea_inline', focus && 'artm-textarea_focus', hasClear && 'artm-textarea_hasClear', disabled && 'artm-textarea_disabled']">
    <div class="artm-textarea-label" :class="labelFloat && 'artm-textarea-label_float'" v-if="label" v-text="label"></div>
    <div class="artm-textarea-original">
      <textarea :style="textareaStyles" ref="textarea" :autofocus="autofocus" :disabled="disabled" :maxlength="maxlength" :name="name" :placeholder="placeholder" :readonly="readonly" @focus="handleFocus" @blur="handleBlur" @input="handleInput" :value="curVal"></textarea>
      <i class="icon-clear" @click="handleClear" v-if="hasClear && showClear"></i>
    </div>
    <slot></slot>
  </div>
</template>
<script>
	import calcTextareaHeight from '../../../utils/calcTextareaHeight'
	export default {
		name: 'artm-textarea',
		props: {
			value: String,
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
      // textarea 属性
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
        curVal: this.value || '',
				textareaStyles: {}
			}
    },
    mounted () {
			const autoSize = this.autoSize;
			if (!autoSize) {
				return false;
			}
			const minRows = autoSize.minRows;
			const maxRows = autoSize.maxRows;
			this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
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
  @import "../../../styles/components/textarea";
</style>