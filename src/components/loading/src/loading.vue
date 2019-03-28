<template>
  <div class="artm-loading" v-show="show">
    <artm-toast mask trans="toast-scale" type="icon" :content="text" v-model="show" :autoClose="false">
      <slot name="icon">
        <span slot="icon" class="artm-loading-icon"></span>
      </slot>
    </artm-toast>
  </div>
</template>
<script>
  import JrvmToast from '../../toast/index'
	export default {
		name: 'artm-loading',
		props: {
			value: Boolean,
      text: {
      	type: String,
        default: "加载中..."
      },
		},
    data () {
			return {
				show: this.value
      }
    },
    watch: {
			show (val) {
        this.$emit("input", val);
      },
      value (val) {
				this.show = val;
      }
    },
		methods: {},
    components: {
			JrvmToast
    }

	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/loading";
</style>