<template>
  <div class="artm-uploader">
    <div class="artm-uploader-layer">
      <slot name="placeholder">
        <div class="artm-uploader-placeholder"></div>
      </slot>
    </div>
    <div class="artm-uploader-layer">
      <img :src="previewUrl" alt="" class="artm-uploader-preview">
    </div>
    <div class="artm-uploader-progress" :class="`artm-uploader-progress_${status}`" v-if="status && status !== 'success'">
      <i class="artm-uploader-progress-icon"></i>
      <p class="artm-uploader-progress-desc" v-text="progress" v-if="status === 'uploading'"></p>
    </div>
    <div class="artm-uploader-layer">
      <input type="file" @change="chooseFile" :accept="accept" />
    </div>
    <div class="artm-uploader-close" v-if="file" @click="clear"></div>
  </div>
</template>
<script>
	export default {
		name: 'artm-uploader',
		props: {
			file: [Object,File],
      // blob预览，开启则前端预览本地文件，不开启则拿到真实url再预览
      blob: {
				type: Boolean,
        default: true
      },
      // 预览url
			imgUrl: String,
      // 最大尺寸
      maxSize: Number,
      // 支持格式
			accept: String,
      // 是否使用加载进度
      hasProgress: {
				type: Boolean,
        default: true
      },
      // 进度
      progress: Number,
      // 进度描述
			desc: String,
      // 状态 uploading: 上传中  precessing：处理中 success：成功 fail：失败
      status: String,
		},
    data () {
			return {
				$input: null,
        previewUrl: this.imgUrl
      }
    },
    created () {
    },
		mounted () {

		},
    methods: {
			// 删除文件
      clear () {
      	this.$input.value = ''
        this.previewUrl = null
        this.$emit('on-delete', this.$input)
      },
      // 选择文件
      chooseFile (event) {
      	this.$input = event.target
        if (this.$input.files.length === 0) {
      		return false
        } else {
      		let file = this.$input.files[0]
          if (this.maxSize && file.size > this.maxSize) {
      			this.$input.value = ''
            this.$emit('on-error', {type: 'exceedLimit', size: file.size, limitSize: this.maxSize})
          } else {
      			if (this.blob) {
              this.previewUrl = URL.createObjectURL(file)
            }
      			this.$emit('on-change', file)
          }
        }
      },
		},
		watch: {
			status (val) {
				if(val === "fail") {
					this.clear();
				}
			},
			imgUrl (val) {
				this.previewUrl = val
      }
		}
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/uploader";
</style>